import { mockClient } from 'aws-sdk-client-mock';
import {
  LambdaClient,
  InvokeCommand,
  InvokeCommandInput,
} from '@aws-sdk/client-lambda';
import { invokeLambda } from '../../src/v3/lambda';

const lambdaMock = mockClient(LambdaClient);

beforeEach(() => {
  lambdaMock.reset();
});

test('a Lambda invocation', async () => {
  lambdaMock.on(InvokeCommand).callsFake((input: InvokeCommandInput) => {
    const payloadString = (input.Payload || '').toString();
    const name = JSON.parse(payloadString).name;
    return Promise.resolve({
      Payload: Buffer.from(JSON.stringify({ greeting: `Hello ${name}!` })),
    });
  });
  // const mockData = { greeting: 'Hello Tramaine!' };
  // lambdaMock
  //   .on(InvokeCommand)
  //   .resolves({ Payload: Buffer.from(JSON.stringify(mockData)) });

  const greeting = await invokeLambda('Tramaine');

  expect(greeting).toEqual('Hello Tramaine!');
});

import AWSMock from 'aws-sdk-mock';
import AWS, { AWSError } from 'aws-sdk';

import { InvocationRequest, InvocationResponse } from 'aws-sdk/clients/lambda';

test('a Lambda invocation', async () => {
  AWSMock.setSDKInstance(AWS);
  AWSMock.mock(
    'Lambda',
    'invoke',
    (
      params: InvocationRequest,
      callback: (err: AWSError | null, data: InvocationResponse) => void
    ) => {
      callback(null, { Payload: { foo: 'bar' } });
    }
  );

  const lambda = new AWS.Lambda();
  const foo = await lambda.invoke({ FunctionName: 'foo' }).promise();

  expect(foo.Payload).toStrictEqual({ foo: 'bar' });

  AWSMock.restore('Lambda');
});

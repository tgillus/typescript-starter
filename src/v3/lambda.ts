import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

export async function invokeLambda(name: string): Promise<string | void> {
  const data = { name };
  const client = new LambdaClient({ apiVersion: '2015-03-31' });
  const command = new InvokeCommand({
    FunctionName: 'SayHello',
    Payload: Buffer.from(JSON.stringify(data)),
  });

  const response = await client.send(command);
  const payload = response.Payload;
  if (payload) {
    return JSON.parse(payload.toString()).greeting;
  }
}

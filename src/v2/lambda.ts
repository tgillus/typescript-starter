import aws from 'aws-sdk';

export async function invokeLambda(): Promise<string | undefined> {
  const lambda = new aws.Lambda();
  const response = await lambda
    .invoke({
      FunctionName: 'foo',
    })
    .promise();

  return response.Payload?.toString();
}

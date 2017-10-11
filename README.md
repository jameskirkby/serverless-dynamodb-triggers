# Serverless DynamoDB to Lambda 

Basic example of triggering another function when data is inserted/modified in a DynamoDB stream

### Prerequisites

You will need

* An AWS account
* An IAM account with DynamoDB stream privileges
* The AWS SDK installed on your local machine, configured to your IAM credentials
* serverless installed on your local machine

### Installation

1. Clone this repo
2. Update the values in `serverless.yml`
3. Deploy to AWS by running `serverless deploy`
4. You can view the logs in **AWS CloudWatch > Log Groups > /aws/lambda/serverless-dynamodb-triggers-prod-receiveOrder** and **AWS CloudWatch > Log Groups > /aws/lambda/serverless-dynamodb-triggers-prod-processOrder**
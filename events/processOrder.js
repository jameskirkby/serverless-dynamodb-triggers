'use strict'

module.exports = (event, context, callback) => {

  /*
    example event values
    event: {
      "Records": [{
        "eventID": "987654321",
        "eventName": "INSERT",
        "eventVersion": "1.1",
        "eventSource": "aws:dynamodb",
        "awsRegion": "eu-west-1",
        "dynamodb": {
          "ApproximateCreationDateTime": 1507710660,
          "Keys": {
            "ID": {
              "S": "123456789"
            }
          },
          "NewImage": {
            "Order": {
                "S": "{\"id\":123456789,\"email\":\"email@email.com\" ... }"
            },
            "ID": {
                "S": "123456789"
            },
            "Ttl": {
                "N": "1507969879"
            }
          },
          "SequenceNumber": "###",
          "SizeBytes": 4708,
          "StreamViewType": "NEW_AND_OLD_IMAGES"
        }
      }]
    }
  */

  console.log(JSON.stringify(event))

  /*
    do something with the data
  */

  return callback()

}
'use strict'

const uuid = require('uuid/v1')

const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB()

module.exports = (event, context, callback) => {

  // the TTL is used to define when to automatically delete the data from the database
  // (this has to be enabled in DynamoDB)
  // so it's set to now, plus 3 days
  const ttl = (parseInt(new Date().getTime() / 1000) + (86400 * 3)).toString()

  // setup the data to be sent to the database
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      ID: {
        S: uuid(),
      },
      Order: {
        S: event.body,
      },
      Ttl: {
        N: ttl,
      },
    },
  }

  // save the data to DynamoDB
  dynamodb.putItem(params, (err) => {

    if(err) {

      console.log(err)
      return callback(err)

    }

    console.log('Order saved to database')

    // this will be the response
    return callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      },
      body: JSON.stringify({
        response: 'Data received'
      })
    })

  })

}
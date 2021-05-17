'use strict';

const AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {
  const ddb = new AWS.DynamoDB.DocumentClient();

  const params = {
      Item: {
          date: 321456,
          name: "Test"
      },
      TableName: 'user'
  };

  ddb.put(params, function(err, data){
      if(err){
          console.log(err);
      }
      console.log(data);
  });
};

/*
Response
null

Function Logs
START RequestId: bf10c007-8c3b-40ec-9066-c4c625e47dd8 Version: $LATEST
2021-05-15T03:03:11.230Z	bf10c007-8c3b-40ec-9066-c4c625e47dd8	INFO	{}
END RequestId: bf10c007-8c3b-40ec-9066-c4c625e47dd8
REPORT RequestId: bf10c007-8c3b-40ec-9066-c4c625e47dd8	Duration: 866.87 ms	Billed Duration: 867 ms	Memory Size: 128 MB	Max Memory Used: 88 MB	Init Duration: 402.83 ms

Request ID
bf10c007-8c3b-40ec-9066-c4c625e47dd8

Url:
https://5s6nruoe37.execute-api.us-east-2.amazonaws.com/putUser
*/
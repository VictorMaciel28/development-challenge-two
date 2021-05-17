'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function (e, context, callback) {
 
console.log(e)

  var params = {
      Item: {
          date: new Date().getTime(),
          age: e.age,
          name: e.name,
          symptom: e.symptom,
          diaginostic: e.diagnostic,
          medications: e.medications,
          recommendations: e.recommendations
      },
      TableName: 'user'
  };

  docClient.put(params, function(err, data){
      if(err){
          callback(err,null);
      }
      callback(null,data)
  });
  
  const data = docClient.put(params, function(err, data){
      if(err){
          callback(err,null);
      }
      callback(null,data)
  });
}

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
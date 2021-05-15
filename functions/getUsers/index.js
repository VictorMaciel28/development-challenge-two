'use strict';

const AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {
  const ddb = new AWS.DynamoDB.DocumentClient();

  const params = {
      TableName: 'user',
      Limit:10
  };

  ddb.scan(params, function(err, data){
      if(err){
          console.log(err);
      }
      console.log(data);
  });
};

/* 
Execution Result:
START RequestId: 8100f51c-3dc1-49cc-ae5b-c783fcee47c7 Version: $LATEST
2021-05-14T01:56:27.362Z	8100f51c-3dc1-49cc-ae5b-c783fcee47c7	INFO	{
  Items: [
    { name: 'Mario', age: 22, date: 654321 },
    { name: 'Pedro', age: 24, date: 123456 }
  ],
  Count: 2,
  ScannedCount: 2
}
END RequestId: 8100f51c-3dc1-49cc-ae5b-c783fcee47c7
REPORT RequestId: 8100f51c-3dc1-49cc-ae5b-c783fcee47c7	
Duration: 888.98 ms	Billed Duration: 889 ms	Memory Size: 128 MB	
Max Memory Used: 88 MB	Init Duration: 399.95 ms

Request ID
8100f51c-3dc1-49cc-ae5b-c783fcee47c7
*/
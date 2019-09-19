const express = require('express')
const app = express();
var request = require('request');

app.get('/', (req, res) => {

	request('https://yourcompany.demdex.net/event?d_cid_ic=crm_data%01YW5oYXdrbW5AYWRvYmUuY29tMVRlbGVncmFwaDE3LzkvMjAxOQ&c_customerstatus=vip', function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	});
  	res.send('You just made a request to DCS API!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

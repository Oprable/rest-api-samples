var request = require('request');

const basepath = 'https://epq7xwdfx9.execute-api.us-east-1.amazonaws.com/dev'
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJob29rIjoiaHR0cHM6Ly95b3VyX3dlYmhvb2tfYXBpL3N0YXR1cyIsImNsaWVudC1uYW1lIjoiSW50ZWdyYXRpb24iLCJjbGllbnQtaWQiOiJJbnRlZ3JhdGlvbiIsIm9yZ2FuaXphdGlvbi1pZCI6Inh4eCIsIm9yZ2FuaXphdGlvbi1uYW1lIjoiT3ByYWJsZSIsImlzcyI6InNlbGYiLCJhdWQiOiJ1cm46Y29tbW9ud2VsbGFsbGlhbmNlLm9yZyIsIm5waSI6Ijc4Nzk4Nzg3OTgiLCJzdWIiOiI3ODc5ODc4Nzk4Iiwic3ViamVjdC1pZCI6IkRhd24gRGVuaXNlIEpvaG5zb24sIE1EIiwiZG9jdG9yLWRpc3BsYXktaWQiOiJVU1RYNzAwMDAwMCIsInVybjpvYXNpczpuYW1lczp0Yzp4c3BhOjEuMDpzdWJqZWN0OnB1cnBvc2VvZnVzZSI6IlJFUVVFU1QiLCJyb2xlcyI6WyJkb2N0b3IiXSwibmJmIjoxNjQwMTAyMDE4LCJleHAiOjE2NDAxMDYyMTgsImlhdCI6MTY0MDEwMjYxOH0.VTq0PHXSUzR5225zjWa86wMmpDQjbB-rvWaVAFpb1dl9YLPbkUqrzO9TTAJMBNdctcXMJch6wjCbFhmPW1XT1vKY9INeinYV-aqZaYfkqBYhWUoB2sbqA0YmekH_cFMtxIbAw3_6wFKWFwE6dRijr2oaI_mqvZx5hqfl6YRE48etNYLTmDyDkzspKO5LfEgzm4HyjyJcPsruo6bozh5aS6n7n1XjDRgn3DbR0sF5aX1Nxs5aQ_Eo91uMx-G8JLr8EtEnYnAac5MBrAO3KnY9Etj4_nVH5QuPvKPGSqrqfo_9E-MbyNYjZNQ3_ZGfN3Dm984Bzql0PnpyYCxUkzW3RA' // Generate token using Token.js


// 1. Check if you can connect to server. This doesn't require auth token
function hello(){
	var options = {
	  'method': 'GET',
	  'url': `${basepath}/hello/`,
	  'headers': {
	    'Content-Type': 'application/json'
	  }
	};
	request(options, function (error, response) {
	  if (error) throw new Error(error);
	  console.log(`Hello API Response: ${response.body}`);
	});
}


// 2. Check if you can connect to server. This require auth token
function ping(){
	var options = {
		'method': 'GET',
		'url': `${basepath}/ping/`,
		'headers': {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(`Ping Pong API Response: ${response.body}`);
	});
}


// 3. Create request to enroll patient
function enroll_patient(params){
	var options = {
		'method': 'GET',
		'url': `${basepath}/enroll?fname=${params.fname}&lname=${params.lname}&dob=${params.dob}&gender=${params.gender}&address=${params.address}&zip=${params.zip}&mobile_number=${params.mobile_number}`,
		'headers': {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	};
	console.log('options==>',options['url'])
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(`Enrollment API Response: ${response.body}`);
	});

}


// 4. Check status of enrollment request
function enrollment_status(request_id){
	var options = {
		'method': 'GET',
		'url': `${basepath}/enroll/?request_id=${request_id}`,
		'headers': {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(`Enrollment Status API Response: ${response.body}`);
	});
}


// 5. Get all documents of patient
function get_patient_document_urls(patientId){
	var options = {
		'method': 'GET',
		'url': `${basepath}/get_patient_document_urls/?patientId=${patientId}`,
		'headers': {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(`Patient Document API Response: ${response.body}`);
	});
}


// --------------------------------- Function Calling -------------------------------------------

// 1. Check server connectivity
hello()

// 2. Check server connectivity using auth token
//ping()

// 3. Enroll patient
//enroll_patient({fname:'Stephan', lname:'hood', dob: '08/24/1957', gender: 'Male', 'address':'road 2 xyz', zip: '46336', mobile_number: '6563451212'})


// 4. Enroll request status
//enrollment_status('6b405e2e-9c3e-42ce-a1f0-62ce9f12c583') // You will get request id from enroll_patient. Which need to pass here to get status of request

// 5. Get patient documents
//get_patient_document_urls('6b405e2e-9c3e-42ce-a1f0-62ce9f12c583') // You will get patientId from enrollment status api. Which need to pass here










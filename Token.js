var jwt = require('jsonwebtoken');
const fs = require('fs')
const moment = require('moment');
const iat = moment().unix()
const privateKey = fs.readFileSync('./Data/privatekey.pem') // Provide absolute path of private key file path here

function generate_token(params){
	return jwt.sign(params, privateKey, { algorithm: 'RS256'});
}

function decode_token(token){
	try{
      return jwt.decode(token);
    }catch (err) {
       return err.stack
    }
}

// --------------------------------- Function Calling -------------------------------------------
// 1. Generate token
let token = generate_token({
    'webhook': 'https://your_webhook_api/status', // This is optional, You can provide end point to get request status 
    'client-name': 'Integration', // Get this from oprable
    'client-id': 'Integration', // Get this from oprable
    'organization-id': 'xxx',  // Get this from oprable
    'organization-name': 'Oprable', // Get this from oprable
    'iss': 'self', // Keep Default 
    'aud': 'urn:commonwellalliance.org', // Keep Default
    'npi': '7879878798', // Update correct npi number here
    'sub': '7879878798', // Update correct sub number here
    'subject-id': 'Dawn Denise Johnson, MD',  // Doctor name in subject id
    'doctor-display-id': 'USTX7000000', // Doctor display id update here
    "urn:oasis:names:tc:xspa:1.0:subject:purposeofuse": 'REQUEST', // ⚠️⚠️ Choose between REQUEST or TREATMENT as per access level. Please make sure you are using correct value.  
    "roles": ["doctor"],
    'nbf': iat - 600, //  It identifies the time before which the token must not be accepted.
    'exp': iat + 3600, // Expiry time of token.
  }
)
console.log(`\nGenerated Token: \n${token}`)


// 2. Decode token
let decodedToken = decode_token(token)
console.log('\nDecoeded Token: \n',JSON.stringify(decodedToken, null, 4))




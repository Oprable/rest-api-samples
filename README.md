# Oprable Rest Apis

[Click here for Oprable Website:](https://www.oprable.com)

This repo contains the sample and associated code for Oprable rest apis.
# Summary
| Section | Description |
| --- | --- |
| `1. JWT Token` | Token to auth apis |
| `2. Postman Collecion ` | Test api using Postman|
| `3. Test API using NodeJs ` |

##### Prerequisite: You need to get private key of ssl certification. Private key will help to generate JWT token. Which will use to auth api.

## 1. JWT Token
* Generate JWT Token:
   ```
    node Token.js
    ```

## 2. Postman
* You can import postman collection (postman/Oprable Rest API.postman_collection.json) along with environmental (postman/OprableRestAPi.postman_environment.json)

  Note: Make sure you update token value in environment.

## 3. Test API using NodeJs
* You can use node js to test api
  ```
    node Api.js
  ```
# News-Aggregator API

Objective: Build a RESTful API that allows users to fetch news articles from multiple sources based on their preferences.

Set up a basic Node.js project with Express.js and other necessary NPM packages.
# Implement a RESTful API with the following endpoints:

POST /register: Register a new user.

POST /login: Log in a user.

#CURL 
 1) Register :
    
 i)  curl --location 'localhost:4018/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fullName": "article",
    "email": "ab1c@gmail.com",
    "role": "admin",
    "prefrences": "technology",
    "password": "4213"
}'
ii) Data:
{
  "_id": {
    "$oid": "64d15deb9c9a93821c2f12dc"
  },
  "fullName": "article",
  "email": "ab1c@gmail.com",
  "role": "admin",
  "password": "$2b$08$KXMoKKZAg93g9iodzd6xOu7dj2giwfqU.wsy8EsaOwD43a7RJtZrm",
  "preferences": [
    "general"
  ],
  "created": {
    "$date": "2023-08-07T21:11:07.081Z"
  },
  "__v": 0
}

2) Signin :
   i)  curl --location 'localhost:4018/signin' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "ab1c@gmail.com",
    "password": "4213"
}'

ii) Data :
{
    "user": {
        "user": "64d15deb9c9a93821c2f12dc",
        "email": "ab1c@gmail.com",
        "fullName": "article"
    },
    "message": "LOgin Successful",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1ZGViOWM5YTkzODIxYzJmMTJkYyIsImlhdCI6MTY5MTQ0Mjk4NiwiZXhwIjoxNjkyMzA2OTg2fQ.W7SHVyjqu_cOpbF4U58-dXpm__vyicCnU35AkMU9_78"
}



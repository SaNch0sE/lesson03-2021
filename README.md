# API

_0. Healthcheck_
​
```bash
    curl --location --request GET 'localhost:3000/healthcheck'
```

_1. Search by id_
​
```bash
    curl --location --request GET 'localhost:3000/v1/user/<your id>'
```

_2. Search by email_
​
```bash
    curl --location --request GET 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
    }'
```
​
_3. Create_
​
```bash
    curl --location --request POST 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "name": "testUser"
    }'
```
​
_4. Update_
​
```bash
    curl --location --request PATCH 'localhost:3000/v1/user/<user id>' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "newTestUser"
    }'
```
​
_5. Remove by id_
​
```bash
    curl --location --request DELETE 'localhost:3000/v1/user/<user id>'
```

_6. Remove by email_
​
```bash
    curl --location --request DELETE 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```
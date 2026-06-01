# API Documentation

## Base URL

http://localhost:5000/api/v1

---

## Authentication

### Register User

POST /users/register

Request Body:

```json
{
  "name": "Nazmul",
  "email": "nazmul@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

POST /users/login

Request Body:

```json
{
  "email": "nazmul@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

### Get Profile

GET /users/profile

Headers:

```txt
Authorization: Bearer JWT_TOKEN
```

---

## Tasks

### Create Task

POST /tasks

Headers:

```txt
Authorization: Bearer JWT_TOKEN
```

Request Body:

```json
{
  "title": "Assignment",
  "description": "Complete internship assignment"
}
```

---

### Get Tasks

GET /tasks

Headers:

```txt
Authorization: Bearer JWT_TOKEN
```

---

### Update Task

PUT /tasks/:id

Headers:

```txt
Authorization: Bearer JWT_TOKEN
```

Request Body:

```json
{
  "title": "Updated Task",
  "description": "Updated Description"
}
```

---

### Delete Task

DELETE /tasks/:id

Headers:

```txt
Authorization: Bearer JWT_TOKEN
```

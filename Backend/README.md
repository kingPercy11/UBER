# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:

## `/drivers/register` Endpoint

### Description

Registers a new driver by creating a driver account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): driver's first name (minimum 3 characters).
  - `lastname` (string, optional): driver's last name (minimum 3 characters).
- `email` (string, required): driver's email address (must be a valid email).
- `password` (string, required): driver's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle passenger capacity (minimum 1).
  - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

### Example Response

- `driver` (object):
  - `fullname` (object).
    - `firstname` (string): driver's first name (minimum 3 characters).
    - `lastname` (string): driver's last name (minimum 3 characters).   
  - `email` (string): driver's email address (must be a valid email).
  - `password` (string): driver's password (minimum 6 characters).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (String): JWT Token

## `/drivers/login` Endpoint

### Description

Authenticates a driver using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/drivers/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): driver's email address (must be a valid email).
- `password` (string, required): driver's password (minimum 6 characters).

## `/drivers/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated driver.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

## `/drivers/logout` Endpoint

### Description

Logout the current driver and blacklist the token provided in cookie or headers.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie.


# TurfTender API Documentation

Welcome to the TurfTender API documentation. TurfTender is a platform that connects users with turf facilities for events and bookings. Below, you will find information about the available endpoints, their functionalities, and the expected input and output formats.

## Base URL

The base URL for all API endpoints is [https://turftender.onrender.com/api](https://turftender.onrender.com/api)

## Endpoints

### Admin User

#### 1. Admin User Login

- **Endpoint:** `/admin/login`
- **Method:** `POST`
- **Description:** Logs in an admin user.
- **Input:**
  - `email` (string): Admin user email
  - `password` (string): Admin user password
- **Output:**
  - `email` (string): Admin user email
  - `token` (string): Authentication token
  - `admin` (boolean): Indicates if the user is an admin

#### 2. Admin User Signup

- **Endpoint:** `/admin/signup`
- **Method:** `POST`
- **Description:** Registers a new admin user.
- **Input:**
  - `name` (string): Admin user name
  - `mobileNumber` (string): Admin user mobile number
  - `email` (string): Admin user email
  - `address` (string): Admin user address
  - `district` (string): Admin user district
  - `pincode` (number): Admin user pincode
  - `password` (string): Admin user password
  - `avatar` (string): Admin user avatar URL
- **Output:**
  - `adminUser` (object): Newly created admin user details

#### 3. Admin User OTP Confirmation

- **Endpoint:** `/admin/signup/otp`
- **Method:** `POST`
- **Description:** Confirms admin user registration with OTP.
- **Input:**
  - `name` (string): Admin user name
  - `mobileNumber` (string): Admin user mobile number
  - `email` (string): Admin user email
  - `address` (string): Admin user address
  - `district` (string): Admin user district
  - `pincode` (number): Admin user pincode
  - `password` (string): Admin user password
  - `avatar` (string): Admin user avatar URL
  - `otp` (string): OTP received via email
- **Output:**
  - `adminUserOtp` (object): Confirmed admin user details

#### 4. Update Admin User Data

- **Endpoint:** `/admin/data`
- **Method:** `PUT`
- **Description:** Updates admin user data.
- **Input:**
  - `name` (string): Updated admin user name
  - `mobileNumber` (string): Updated admin user mobile number
  - `email` (string): Updated admin user email
  - `address` (string): Updated admin user address
  - `district` (string): Updated admin user district
  - `pincode` (number): Updated admin user pincode
- **Output:**
  - `update` (object): Updated admin user details

#### 5. Update Admin User Password

- **Endpoint:** `/admin/password-update`
- **Method:** `PUT`
- **Description:** Updates admin user password.
- **Input:**
  - `password` (string): Updated admin user password
- **Output:**
  - `update` (object): Updated admin user details

### Favorites

#### 1. Add Favorite

- **Endpoint:** `/favorites/:id`
- **Method:** `POST`
- **Description:** Adds a turf to the user's favorites.
- **Input:**
  - `id` (string): Turf ID to be added to favorites
- **Output:**
  - `favorite` (object): Details of the added favorite

#### 2. Get Favorites

- **Endpoint:** `/favorites/getfavorites`
- **Method:** `GET`
- **Description:** Retrieves the user's favorite turfs.
- **Output:**
  - `favorite` (array): List of favorite turfs

### Booking Details

#### 1. Get All Booking Details

- **Endpoint:** `/booking/details/:day/:month/:year`
- **Method:** `GET`
- **Description:** Retrieves all booking details for a specific date.
- **Input:**
  - `day` (string): Day of the month
  - `month` (string): Month of the year
  - `year` (string): Year
- **Output:**
  - `bookingDetails` (array): List of booking details for the specified date

#### 2. Get Total Revenue

- **Endpoint:** `/booking/details/revenue`
- **Method:** `GET`
- **Description:** Retrieves the total revenue.
- **Output:**
  - `data` (string): Total revenue amount

#### 3. Get Total Revenue Graph

- **Endpoint:** `/booking/details/graph`
- **Method:** `GET`
- **Description:** Retrieves the total revenue graph data.
- **Output:**
  - `expenses` (array): Monthly expense data for the revenue graph

#### 4. Admin Book Turf

- **Endpoint:** `/booking/adminbook/:id`
- **Method:** `POST`
- **Description:** Books a turf for an admin user.
- **Input:**
  - `id` (string): Turf ID to be booked
  - `time` (string): Booking time
  - `rate` (number): Booking rate
  - `date` (string): Booking date
  - `name` (string): User name
  - `mobileNumber` (string): User mobile number
  - `event` (string): Booking event
- **Output:**
  - `book` (object): Details of the booked turf

### Turf

#### 1. Get All Turfs

- **Endpoint:** `/turf/:category`
- **Method:** `GET`
- **Description:** Retrieves all turfs based on the category.
- **Input:**
  - `category` (string): Turf category
- **Output:**
  - `turf` (array): List of turfs in the specified category

#### 2. Get Turf Details

- **Endpoint:** `/turf/details/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific turf.
- **Input:**
  - `id` (string): Turf ID
- **Output:**
  - `turf` (object): Details of the specified turf

### User

#### 1. User Login

- **Endpoint:** `/user/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Input:**
  - `mobileNumber` (string): User mobile number
  - `password` (string): User password
- **Output:**
  - `token` (string): Authentication token
  - `user` (object): User details

#### 2. User Signup

- **Endpoint:** `/user/signup`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Input:**
  - `name` (string): User name
  - `mobileNumber` (string): User mobile number
  - `password` (string): User password
  - `avatar` (string): User avatar URL
- **Output:**
  - `user` (object): Newly created user details

#### 3. User OTP Confirmation

- **Endpoint:** `/user/signup/otp`
- **Method:** `POST`
- **Description:** Confirms user registration with OTP.
- **Input:**
  - `name` (string): User name
  - `mobileNumber` (string): User mobile number
  - `password` (string): User password
  - `avatar` (string): User avatar URL
  - `otp` (string): OTP received via SMS
- **Output:**
  - `userOtp` (object): Confirmed user details

#### 4. Update User Data

- **Endpoint:** `/user/data`
- **Method:** `PUT`
- **Description:** Updates user data.
- **Input:**
  - `name` (string): Updated user name
  - `mobileNumber` (string): Updated user mobile number
  - `avatar` (string): Updated user avatar URL
- **Output:**
  - `update` (object): Updated user details

#### 5. Update User Password

- **Endpoint:** `/user/password-update`
- **Method:** `PUT`
- **Description:** Updates user password.
- **Input:**
  - `password` (string): Updated user password
- **Output:**
  - `update` (object): Updated user details

### Turf Review

#### 1. Add Turf Review

- **Endpoint:** `/turf/review/:id`
- **Method:** `POST`
- **Description:** Adds a review for a specific turf.
- **Input:**
  - `id` (string): Turf ID
  - `rating` (number): Review rating
  - `comment` (string): Review comment
- **Output:**
  - `review` (object): Details of the added review

## Authentication

All endpoints, except for the user login, user signup, user OTP confirmation, admin login, and admin signup endpoints, require authentication. To authenticate a request, include the user's or admin's authentication token in the request headers.

**Example:**

```
Authorization: Bearer <token>
```

## Error Handling

The API returns standard HTTP status codes to indicate the success or failure of a request. In case of an error, additional information is provided in the response body.

**Example Error Response:**

```json
{
  "error": {
    "status": 404,
    "message": "Resource not found"
  }
}
```

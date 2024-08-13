# Timestamp Microservice

This project is a microservice API that handles date/time requests and returns the corresponding Unix timestamp and UTC date. It provides information based on the provided date input or current time if no date is provided.

## Description

This microservice responds to date/time queries and returns a JSON object with the Unix timestamp and the UTC date. It handles different formats of date inputs and returns appropriate responses.

### Endpoints

1. **GET** `/api/:date?`

   - **Description**: Returns a JSON object with Unix timestamp and UTC date for the provided date.
   - **Parameters**:
     - `date`: A valid date string or Unix timestamp. If the parameter is empty, the current date and time are used.
   - **Responses**:
     - If a valid date is provided:
       ```json
       {
         "unix": 1451001600000,
         "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
       }
       ```
     - If an invalid date is provided:
       ```json
       {
         "error": "Invalid Date"
       }
       ```
     - If the date parameter is empty:
       ```json
       {
         "unix": <current_unix_timestamp>,
         "utc": "<current_utc_date>"
       }
       ```

## Example Usage

1. Request a specific date:

[project url]/api/2015-12-25


Example output:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

Request a Unix timestamp:

[project url]/api/1451001600000
Example output:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Technologies Used
- Node.js: JavaScript runtime for the server.
- Express: Web framework used to build the HTTP server.

## Deploy
[Timestamp Microservice](https://timestamp-microservice-fcc-ktai.onrender.com/)

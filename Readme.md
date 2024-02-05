# Food Delivery Pricing API

The Food Delivery Pricing API is a comprehensive solution designed to address the dynamic pricing needs of food delivery services. By leveraging this API, businesses can automatically calculate delivery charges based on several critical factors, including the type of food item (perishable or non-perishable), the delivery distance, and the specific delivery zone. This API aims to enhance the operational efficiency of food delivery services by providing a scalable and adaptable pricing model that can be tailored to the unique requirements of each delivery scenario. Deployed on Render.com, the API offers robustness and reliability, ensuring seamless integration and consistent performance for all users.

## Features

The Food Delivery Pricing API offers a suite of features designed to provide flexible, dynamic pricing solutions for food delivery services. Key features include:

- **Dynamic Pricing Calculation**: Automatically computes delivery costs by considering the distance to the delivery destination, the type of item being delivered (perishable vs. non-perishable), and the delivery zone, ensuring accurate pricing for each order.

- **Perishable and Non-Perishable Item Support**: Distinct pricing models for perishable and non-perishable items, recognizing the unique requirements and urgency associated with transporting different types of food.

- **Zone-Based Pricing Configuration**: Allows for the customization of delivery charges based on predefined zones, enabling businesses to adjust pricing based on delivery area specifics.

- **Scalable Architecture**: Designed to efficiently handle a high volume of pricing calculations, ensuring scalability and reliability even during peak demand periods.

- **Comprehensive API Documentation**: Detailed documentation available through Swagger UI, providing clear instructions for integrating and utilizing the API, along with interactive examples to test and explore API endpoints.

- **Secure and Reliable**: Hosted on Render.com, offering robust security features and high availability to ensure the API is always accessible when needed.


## Technologies and Libraries

The Food Delivery Pricing API is built on a robust stack of technologies and libraries, ensuring high performance, ease of integration, and developer-friendly documentation. Here’s a breakdown of the core components:

### Core Technologies

- `Node.js`: A JavaScript runtime built on Chrome's V8 JavaScript engine, ideal for building fast and scalable network applications.
- `Express`: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- `PostgreSQL (pg)`: A powerful, open-source object-relational database system used to store all application data securely and reliably.
- `Sequelize`: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

### Documentation and Testing

- `Swagger-jsdoc`: Integrates JSDoc comments with Swagger UI, allowing for the automatic generation of API documentation from the codebase.
- `Swagger UI Express`: Serves auto-generated Swagger UI based on a Swagger definition, providing a visually interactive documentation.
- `Jest`: A delightful JavaScript Testing Framework with a focus on simplicity, supporting project tests including unit and integration tests.
- `Supertest`: A SuperAgent driven library for testing HTTP servers, used to perform API endpoint testing.

### Development Tools

- `Nodemon`: Simplifies development by automatically restarting the node application when file changes in the directory are detected.
- `ESLint`: A static code analysis tool for identifying problematic patterns in JavaScript code, ensuring code quality and consistency.
- `@faker-js/faker`: Generates massive amounts of fake data for testing and development, ensuring robustness and reliability of data handling.

### Additional Libraries

- `body-parser`: Parse incoming request bodies in a middleware before handlers, available under the `req.body` property.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`, providing a safe way to store configuration options.

For in-depth API documentation within your `README.md`, it's essential to structure the information clearly and logically. Here's a suggested outline with section headings that can guide you in documenting your API:

---

## API Documentation Overview

This section provides a comprehensive overview of the Food Delivery Pricing API, detailing the available endpoints, their functionalities, required input data, and the expected response formats.

### Base URL

Define the base URL for all API requests: https://food-delivery-pricing-api-viga.onrender.com/api


### Endpoints

#### Calculate Delivery Cost

- **Endpoint**: `/pricing`
- **Method**: `POST`
- **Description**: Calculates the delivery cost based on distance, item type, and delivery zone.
- **Authorization Required**: No

##### Request Parameters

| Parameter          | Type    | Description                                      | Required |
|--------------------|---------|--------------------------------------------------|----------|
| `zone`             | String  | The delivery zone (e.g., "central", "suburban", "rural"). | Yes      |
| `organization_id`  | String  | Unique identifier for the organization.          | Yes      |
| `total_distance`   | Number  | Total delivery distance in kilometers.           | Yes      |
| `item_type`        | String  | Type of the item ("perishable" or "non-perishable"). | Yes  |

##### Request Example

```json
{
  "zone": "central",
  "organization_id": "005",
  "total_distance": 12,
  "item_type": "perishable"
}
```

##### Response

- **Status Code**: 200 OK
- **Content-Type**: `application/json`

##### Response Example

```json
{
  "total_price": 20.5
}
```

---
### Error Responses

When interacting with the `/pricing` endpoint, clients may encounter various errors due to incorrect or insufficient request parameters, or unexpected server issues. Below are descriptions of possible errors, including their HTTP status codes, content types, and example response bodies.

- **Missing Required Fields**

  If any of the required fields (`zone`, `organization_id`, `total_distance`, `item_type`) are missing from the request:

  - **Status Code**: 400 Bad Request
  - **Content-Type**: `application/json`
  - **Response**:
    ```json
    {
      "error": "Missing required fields"
    }
    ```

- **Invalid `total_distance` Value**

  If the `total_distance` field is not a valid number or is less than or equal to 0:

  - **Status Code**: 400 Bad Request
  - **Content-Type**: `application/json`
  - **Response**:
    ```json
    {
      "error": "Invalid total_distance value"
    }
    ```

- **Unsupported Item Type**

  If the `item_type` field is not one of the supported types (`perishable`, `non-perishable`):

  - **Status Code**: 400 Bad Request
  - **Content-Type**: `application/json`
  - **Response**:
    ```json
    {
      "error": "Unsupported item type"
    }
    ```

- **Pricing Information Not Found**

  If no pricing information is found for the given parameters:

  - **Status Code**: 404 Not Found
  - **Content-Type**: `application/json`
  - **Response**:
    ```json
    {
      "error": "Pricing information not found for the provided parameters."
    }
    ```

- **Internal Server Error**

  For any unexpected errors encountered by the server:

  - **Status Code**: 500 Internal Server Error
  - **Content-Type**: `application/json`
  - **Response**:
    ```json
    {
      "error": "An unexpected error occurred. Please try again later."
    }
    ```

---
Certainly! Let's structure the documentation with an overview, detailed database information including tables and relationships, and then guide users through setting up the project locally, including database creation and seeding.

---

## Database Design

This application uses PostgreSQL, a powerful open-source object-relational database system, to store and manage data efficiently. Below is an overview of the database schema, including tables and their relationships.

Based on the details provided and the associations mentioned, here's the corrected Markdown code for the **Tables** and **Relationships** sections, including some missing details and corrections to align with the database models and associations you've defined:

---

### Tables

- **Organizations**
  - `id`: Primary key
  - `name`: Name of the organization
  - Description: Stores information about different organizations using the delivery service.

- **Items**
  - `id`: Primary key
  - `type`: Type of item (perishable or non-perishable)
  - `description`: Description of the item
  - Description: Catalogues items being delivered.

- **Pricings**
  - `id`: Primary key
  - `organization_id`: Foreign key referencing Organizations
  - `item_id`: Foreign key referencing Items
  - `zone`: Name of the delivery zone
  - `base_distance_in_km`: Base distance threshold for standard pricing
  - `km_price`: Price per kilometer beyond the base distance
  - `fix_price`: Fixed price for delivery within the base distance
  - Description: Defines pricing rules based on zones and item types.

### Relationships

- **Organizations to Pricings**: One-to-Many. An organization can have multiple pricing rules, allowing for customization of pricing based on organizational needs.

- **Items to Pricings**: One-to-Many. A specific item type can have different pricing rules, accommodating variations in delivery costs based on item characteristics.

---

## Getting Started

This project is pre-configured to connect to a shared database hosted on Render.com. To get started using the project locally, follow these simple steps:

### Clone the Repository

Begin by cloning the repository to your local machine:

```bash
git clone https://github.com/Anmol-Srv/Food-Delivery-Pricing-API.git
cd Food-Delivery-Pricing-API
```

### Install Dependencies

Next, install the necessary project dependencies:

```bash
npm install
```

### Start the Application

Finally, you can start the application with:

```bash
npm start
```

This will run the application using the pre-configured database connection details found in the `.env` file included in the repository.

### Optional: Use Your Own Database

If you prefer to use your own database, simply update the database connection details in the `.env` file with your own. This includes the database name, user, password, host, and port.

Certainly, here's how you can add the information about accessing the API once the application is running:

---

### Accessing the API

Once the application is started, the Food Delivery Pricing API will be available locally. You can interact with the API at the following base URL:

```
http://localhost:3001
```

Feel free to explore the Swagger UI documentation for more details on the available endpoints and how to use them. The Swagger UI can be accessed at `http://localhost:3001/api-docs`.

---

## Testing Suite

This project is equipped with a comprehensive suite of tests, ensuring the reliability and correctness of the Food Delivery Pricing API. The tests are built using Jest, a delightful JavaScript Testing Framework with a focus on simplicity.

### Running the Tests

To run the test suite, ensure you have all dependencies installed and then use the following npm script defined in `package.json`:

```bash
npm test
```

This command sets the `NODE_ENV` to `test`, ensuring that the tests are run in the correct environment, and executes Jest with the `--detectOpenHandles` flag to help identify potential issues with lingering connections or processes.

### Test Configuration

The Jest configuration is specified in the `jest.config.js` file, which includes settings optimized for this project's testing needs. This configuration ensures that Jest correctly locates and executes the test files, and it integrates well with other tools and libraries used in the project.

### Test Files

Tests are organized into files corresponding to the application components they target. For example:

- `validationErrors.test.js`: Tests API input validation and error handling.
- `pricingCalculation.test.js`: Focuses on testing the logic for calculating delivery prices.
- `databaseErrors.test.js`: Ensures the application gracefully handles database errors.

Each test file contains multiple test cases designed to cover a wide range of scenarios and edge cases.

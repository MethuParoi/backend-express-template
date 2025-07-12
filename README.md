# Backend Template

This project is a backend template.


## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication and authorization


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/e-commerce-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd e-commerce-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables:
    ```env
    NODE_ENV=development
    PORT=5000
    MONGODB_URI=mongodb+srv://<username>:<password>@<project-name>.mongodb.net/
    JWT_SECRET=your-super-secret-jwt-key
    JWT_EXPIRES_IN=7d
    BCRYPT_SALT_ROUNDS=12

    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Access the API at `http://localhost:5000`.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).# backend-express-template

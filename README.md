[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/dcolley-swagger-mcp-badge.png)](https://mseep.ai/app/dcolley-swagger-mcp)

# Swagger MCP Server

A server that ingests and serves Swagger/OpenAPI specifications through the Model Context Protocol (MCP).

## Features

- Loads Swagger/OpenAPI specifications
- Supports multiple authentication methods:
  - Basic Auth
  - Bearer Token
  - API Key (header or query)
  - OAuth2
- Automatically generates MCP tools from API endpoints
- Server-Sent Events (SSE) support for real-time communication
- TypeScript support

## Security

This is a personal server!! Do not expose it to the public internet.
If the underlying API requires authentication, you should not expose the MCP server to the public internet.

## TODO

- secrets - the MCP server should be able to use secrets from the user to authenticate requests to the API
- Comprehensive test suite

## Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- TypeScript

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dcolley/swagger-mcp.git
cd swagger-mcp
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file based on the example:
```bash
cp .env.example .env
```

4. Configure your Swagger/OpenAPI specification:
   - Place your Swagger file in the project (e.g., `swagger.json`)
   - Or provide a URL to your Swagger specification

5. Update the configuration in `config.json` with your server settings:
```json
{
  "server": {
    "host": "localhost",
    "port": 3000
  },
  "swagger": {
    "url": "url-or-path/to/your/swagger.json",
    "apiBaseUrl": "https://api.example.com",  // Fallback if not specified in Swagger
    "defaultAuth": {  // Fallback if not specified in Swagger
      "type": "apiKey",
      "apiKey": "your-api-key",
      "apiKeyName": "api_key",
      "apiKeyIn": "header"
    }
  }
}
```

Note: The server prioritizes settings from the Swagger specification over the config file:
- If the Swagger file contains a `servers` array, the first server URL will be used as the base URL
- If the Swagger file defines security schemes, they will be used for authentication
- The config file settings serve as fallbacks when not specified in the Swagger file

## Usage

1. Start the development server:
```bash
yarn dev
```

2. Build for production:
```bash
yarn build
```

3. Start the production server:
```bash
yarn start
```

## API Endpoints

- `GET /health` - Check server health status
- `GET /sse` - Establish Server-Sent Events connection
- `POST /messages` - Send messages to the MCP server

## Testing

Run the test suite:
```bash
# Run tests once
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage report
yarn test:coverage
```

## Authentication

The server supports various authentication methods. Configure them in the `config.json` file as fallbacks when not specified in the Swagger file:

### Basic Auth
```json
{
  "defaultAuth": {
    "type": "basic",
    "username": "your-username",
    "password": "your-password"
  }
}
```

### Bearer Token
```json
{
  "defaultAuth": {
    "type": "bearer",
    "token": "your-bearer-token"
  }
}
```

### API Key
```json
{
  "defaultAuth": {
    "type": "apiKey",
    "apiKey": "your-api-key",
    "apiKeyName": "X-API-Key",
    "apiKeyIn": "header"
  }
}
```

### OAuth2
```json
{
  "defaultAuth": {
    "type": "oauth2",
    "token": "your-oauth-token"
  }
}
```

## Development

1. Start the development server:
```bash
yarn dev
```

<!-- 2. Make changes to the code

3. Run tests to ensure everything works:
```bash
yarn test
```

4. Build the project:
```bash
yarn build
``` -->

<!-- ## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request -->

## License

This project is licensed under the Apache 2.0 License.

## Environment Variables

- `PORT`: Server port (default: 3000)
- `API_USERNAME`: Username for API authentication (fallback)
- `API_PASSWORD`: Password for API authentication (fallback)
- `API_TOKEN`: API token for authentication (fallback)
- `DEFAULT_API_BASE_URL`: Default base URL for API endpoints (fallback)
- `DEFAULT_SWAGGER_URL`: Default Swagger specification URL

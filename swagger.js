{
    "openapi": "3.0.0",
        "info": {
        "title": "FullStack RBAC App API",
            "version": "1.0.0",
                "description": "API documentation for Role-Based Access Control Application"
    },
    "servers": [
        {
            "url": "http://localhost:5000"
        }
    ],
        "paths": {
        "/api/auth/register": {
            "post": {
                "summary": "Register a new user",
                    "tags": ["Authentication"],
                        "requestBody": {
                    "required": true,
                        "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "name": { "type": "string" },
                                    "email": { "type": "string" },
                                    "password": { "type": "string" },
                                    "role": { "type": "string" }
                                }
                            },
                            "example": {
                                "name": "User",
                                    "email": "user@example.com",
                                        "password": "123456",
                                            "role": "user"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "User Registered"
                    }
                }
            }
        },
        "/api/auth/login": {
            "post": {
                "summary": "Login a user",
                    "tags": ["Authentication"],
                        "requestBody": {
                    "required": true,
                        "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                    "properties": {
                                    "email": { "type": "string" },
                                    "password": { "type": "string" }
                                }
                            },
                            "example": {
                                "email": "user@example.com",
                                    "password": "123456"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Login Successful"
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/api/auth/user": {
            "get": {
                "summary": "Get logged in user",
                    "tags": ["User"],
                        "security": [
                            {
                                "bearerAuth": []
                            }
                        ],
                            "responses": {
                    "200": {
                        "description": "User Data"
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/api/auth/admin": {
            "get": {
                "summary": "Admin only route",
                    "tags": ["Admin"],
                        "security": [
                            {
                                "bearerAuth": []
                            }
                        ],
                            "responses": {
                    "200": {
                        "description": "Admin Access"
                    },
                    "403": {
                        "description": "Forbidden"
                    }
                }
            }
        }
    },
    "components": {
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                    "scheme": "bearer",
                        "bearerFormat": "JWT"
            }
        }
    }
}

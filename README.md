## Description

## Project structure

**Common Folder**: The common folder is used to store components that are shared across multiple modules and are fundamental to the application's structure.

This can include:

1. **Decorators:** Custom decorators for routes, parameters, or other features.

2. **Filters:** Global or specific filters for handling exceptions and errors.

3. **Guards:** Authorization guards to protect routes based on roles or permissions.

4. **Interceptors:** Interceptors for logging, transformation, or other middleware-like tasks.

5. **Pipes:** Pipes for transforming or validating incoming data.

---

**Config Folder**: The config folder is used for storing configuration files that manage different environments and settings.

This includes:

1. **Environment Configurations:** Separate files for development, production, and testing environments.

2. **App Configuration:** General application settings, like database connections, API keys, and other environment variables.

---

**Modules Folder**: The modules folder is the core of your application, containing feature-specific modules. Each module encapsulates related controllers, services, DTOs, and entities, providing a clear separation of concerns and promoting modular design.

---

**Shared Folder**: The shared folder includes modules or services that are used across multiple features of the application. This ensures reusability and avoids duplication of common functionalities.

---

**Utils Folder**: The utils folder is used for utility functions and helper methods that can be utilized throughout the application. These functions typically include common operations like data formatting, calculations, or other reusable logic.

---

**Assets Folder**: The assets folder stores static assets like images, icons, fonts, and other media files. Organizing these assets in a dedicated directory keeps your project clean and makes it easy to locate and manage these files.

---

**Styles Folder**: The styles folder contains CSS or other styling files used to define the visual appearance of your application. This folder helps in maintaining a consistent style across the application and makes it easier to manage styles for different components and modules.

---

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
$ npm install -g mau
$ mau deploy
```

## CMD (Replace name with your Folder Name)

```bash
#Create Module
$ nest g module name

# Create Controller
$ nest g co name

# Create service
$ nest g s name

# Create service with no testing file
$ nest g s name --no-spec

# Create Res (Module,Controller,Service,Entity ...)
$ nest g res name

# Create Res (Module,Controller,Service,Entity ... with no testing file)
$ nest g res name --no-spec
```

## Dependency

```bash
# Install TypeORM and Database
$ npm install --save @nestjs/typeorm typeorm pg
```

---

_© 2025 My NestJS Project. All rights reserved._

---

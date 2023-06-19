# Next.js E-commerce Store for Beers

![image](https://github.com/mosqueradvd/beer-ecommerce/assets/46954736/b10419b3-e72e-4eb8-9440-b9f32aff1c60)
![image](https://github.com/mosqueradvd/beer-ecommerce/assets/46954736/f9bd2e95-b9a2-4085-b2e1-0b7fff263cbb)

Welcome to our beer e-commerce store built with Next.js! This project aims to create a dynamic shopping experience for our beer enthusiasts. Using a serverless API architecture, our store allows real-time product stock and price updates, ensuring our customers have the most up-to-date information at their fingertips.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

Our e-commerce store has the following features:

1. **Product List Page (PLP)**: Here's where our customers can browse through our rich collection of beers. Each product card includes an image, the brand name, and the price (displayed in dollars with 2-digit cents). Our prices are fetched in real-time from our dedicated API endpoint.

2. **Product Detail Page (PDP)**: Upon clicking a product card on the PLP, customers are taken to the PDP. Here they can see all the product details, including style, substyle, abv, origin, information, and available SKU variants. The PDP also fetches real-time SKU data every 5 seconds, ensuring stock and price information are always accurate.

3. **Dynamic Routing**: Every product detail page can be accessed via the URL `/productId-productBrand`. For instance, for a product with id 5 and brand "Modelo Especial", the URL would be `/5-modelo-especial`.

## API Endpoints

We expose the following API endpoint:

- `GET /api/stock-price/code`: Given a SKU code, this endpoint returns the current stock and price information for the corresponding product.

## Project Setup

Before starting, ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.

Clone the repository:

```sh
git clone https://github.com/mosqueradvd/beer-ecommerce.git
```

Navigate into the project directory:

```sh
cd your-project-name
```

Install dependencies:

```sh
yarn install
```

## Running the Project

Start the development server:

```sh
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the project running.

## Project Structure

Here is a brief explanation of the project structure:

- `/pages` - Contains all the pages of the application.
- `/pages/api` - Contains all the API routes that the application uses.
- `/components` - Contains all the React components that are used in the pages.
- `/types` - Contains the TypeScript types used in the project.

## Contributing

We welcome contributions to this project. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Implement your feature or bug fix.
4. Add, commit, and push your changes.
5. Submit a pull request.

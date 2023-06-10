# Next.js Ecommerce Store "Speedy Pals"

![Speedy Pals](/docs/_media/landingpage.png)

## Description

The Ecommerce Toy Store is a web application built with Next.js 13 that allows users to browse and purchase pet animals sitting in toy cars. It utilizes a PostgreSQL database to store product and order information. The Cart Content(product quantity) is stored in Cookies.

## Technologies Used

The following technologies were used in the development of this project:

- React
- Next.js 13
- PostgreSQL
- TypeScript
- SASS Modules

## Screenshots

![Product Overview](/docs/_media/productpage.png)
![Shopping Cart](/docs/_media/shoppingcart.png)
![Checkout Form](/docs/_media/checkoutform.png)

## Setup Instructions

To set up the project locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/hoferit/nextjs-ecommerce-page.git`
2. Navigate to the project directory: `cd nextjs-ecommerce-page`
3. Install the dependencies: `pnpm install`
4. Create a Postgres database for the project
5. Set up the environment variables by creating a `.env` file based on the `.env.example` file and updating the necessary values
6. Run the database migrations: `pnpm migrate up`
7. Start the development server: `pnpm dev`
8. Open your browser and access the application at `http://localhost:3000`

## Deployment Instructions

To deploy the application via Vercel, follow these instructions:

1. Use the vercel-deploy branch of the project.
2. Create a Postgres storage in vercel
3. Create a Project and overwrite the install command with `pnpm install && pnpm migrate up`
4. Connect storage with project in **Project > Storage > Connect**

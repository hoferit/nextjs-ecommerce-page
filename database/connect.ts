import { config } from 'dotenv-safe';
import postgres from 'postgres';

if (!process.env.POSTGRES_URL) {
  config();
}

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    const databaseURL = process.env.DATABASE_URL || '';

    globalThis.postgresSqlClient = postgres(databaseURL, {
      ssl: {
        rejectUnauthorized: false,
        mode: 'require',
      },
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return globalThis.postgresSqlClient;
}

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase();

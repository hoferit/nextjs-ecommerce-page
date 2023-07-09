const options = {};

if (process.env.DATABASE_URL) {
  options.ssl = {
    rejectUnauthorized: false,
    require: true,
  };

  // Parse the DATABASE_URL to extract necessary connection parameters
  const url = new URL(process.env.DATABASE_URL);
  process.env.PGHOST = url.host;
  process.env.PGUSER = url.username;
  process.env.PGDATABASE = url.pathname.slice(1); // Remove leading slash from pathname
  process.env.PGPASSWORD = url.password;
  process.env.DATABASE_URL = process.env.DATABASE_URL; // Optional: Set DATABASE_URL as well
}

module.exports = {
  ...options,
  // Set environment variables for production, preview, and development environments
  ...(process.env.NOW_REGION === 'dev1'
    ? {
        env: {
          PGHOST: process.env.PGHOST,
          PGUSER: process.env.PGUSER,
          PGDATABASE: process.env.PGDATABASE,
          PGPASSWORD: process.env.PGPASSWORD,
          DATABASE_URL: process.env.DATABASE_URL,
        },
      }
    : {}),
};

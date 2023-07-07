const options = {};

if (process.env.DATABASE_URL) {
  options.ssl = {
    rejectUnauthorized: false,
    require: true,
  };

  // Parse the DATABASE_URL to extract necessary connection parameters
  const url = new URL(process.env.DATABASE_URL);
  process.env.PGHOST = url.host;
  process.env.PGDATABASE = url.pathname.slice(1); // Remove leading slash from pathname
  process.env.PGUSERNAME = url.username;
  process.env.PGPASSWORD = url.password;
}

module.exports = options;

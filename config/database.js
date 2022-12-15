module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.mjqwlfmqfvydzstiqgrb.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'q63#zp!YJAHEas@'),
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
});

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10) || 3000,
  BETA: {
    DATABASE: {
      HOST: process.env.BETA_DATABASE_HOST,
      PORT: parseInt(process.env.BETA_DATABASE_PORT, 10),
      USER: process.env.BETA_DATABASE_USER,
      PASSWORD: process.env.BETA_DATABASE_PASSWORD,
      DATABASE: process.env.BETA_DATABASE_DATABASE,
    },
  },
});

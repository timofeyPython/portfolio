export const dotEnvPath =
  process.env.NODE_ENV === "development"
    ? ".env"
    : ".env";

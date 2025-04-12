import dotenv from "dotenv";
import path from "node:path";
import z from "zod";

dotenv.config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "../.env.production"
      : "../.env.development"
  ),
});

const envSchema = z.object({
  PORT: z.coerce.number(),
});

const { data, success, error } = envSchema.safeParse(process.env);

if (!success) {
  console.error("Invalid environment variables:", error.format());
  process.exit(1);
}

const _env = data;

export const env = <T extends keyof z.infer<typeof envSchema>>(name: T) =>
  _env[name];

import { z, TypeOf } from "zod";

const zodEnv = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string(),
  NODE_ENV: z.string(),
  AFRICA_TALKING_USERNAME: z.string(),
  AFRICA_TALKING_KEY: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}
try {
  zodEnv.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    const { fieldErrors } = err.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) =>
        errors ? `${field}: ${errors.join(", ")}` : field
      )
      .join("\n  ");
    throw new Error(`Missing environment variables:\n  ${errorMessage}`);
  }
}


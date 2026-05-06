import { z } from "zod";

export const signupSchema = z
  .object({
    firstname: z.string().trim().min(1, "First name is required"),

    lastname: z.string().trim().min(1, "Last name is required"),

    email: z.string().trim().toLowerCase().email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Must include at least one uppercase letter"),

    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

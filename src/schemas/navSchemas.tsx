// src/schemas/navSchemas.ts
import { z } from "zod";

// Define the recursive navPageSchema
export const navPageSchema: z.ZodSchema = z.lazy(() =>
  z.object({
    title: z.string(),
    href: z.string().optional(),
    description: z.string().optional(), // Mark path as optional
    icon: z.any().optional(),
    subPages: z.array(navPageSchema).optional(), // subPages is optional
    categories: z
      .array(
        z.lazy(() =>
          z.object({
            title: z.string(),
            pages: z.array(navPageSchema), // Recursive reference
          })
        )
      )
      .optional(), // categories is optional
  })
);

// Define schema for SideNav and TopNav
export const sideNavSchema: z.ZodSchema = z.object({
  pages: z.array(navPageSchema),
});

export const topNavSchema: z.ZodSchema = z.object({
  pages: z.array(navPageSchema),
});

export const subNavSchema: z.ZodSchema = z.object({
  pages: z.array(navPageSchema),
});

// Infer TypeScript types from Zod schema
export type NavPage = z.infer<typeof navPageSchema>; // Inferring types from Zod schema
export type SubPage = z.infer<typeof subNavSchema>;
export type SideNav = z.infer<typeof sideNavSchema>;
export type topNav = z.infer<typeof topNavSchema>;

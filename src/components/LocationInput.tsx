"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Updated Zod schema with conditional validation
const FormSchema = z
  .object({
    zip: z
      .string()
      .min(5, "Zip code must be exactly 5 characters")
      .max(5, "Zip code must be exactly 5 characters")
      .regex(/^\d{5}$/, "Invalid zip code")
      .optional(),
    state: z
      .string()
      .min(2, "State must be at least 2 characters")
      .max(2, "State must be exactly 2 characters (e.g., NY)")
      .optional(),
    city: z.string().min(2, "City must be at least 2 characters").optional(),
  })
  .refine((data) => !!data.zip || (!!data.state && !!data.city), {
    message: "Please enter either a zip code or both a city and state.",
    path: ["zip"], // Customize error path (e.g., show on the zip field)
  });

export default function LocationInput() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      zip: "",
      state: "",
      city: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 mb-2 w-[340px] rounded-md bg-input p-4">
          <code className="text-primary">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 "
      >
        {/* Zip Code Field */}
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="12345" {...field} className="shadow-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* State Field */}
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="NY" {...field} className="shadow-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* City Field */}
        <div className="col-span-1">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New York"
                    {...field}
                    className="shadow-xl"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-1 w-full flex justify-start items-end">
          {" "}
          <Button
            type="submit"
            variant="secondary"
            className="shadow-xl border-border border-solid"
          >
            Check Your Water Quality
          </Button>
        </div>
      </form>
      <FormDescription className="mt-2">
        Enter your zip code, or city and state to check your water quality.
      </FormDescription>
    </Form>
  );
}

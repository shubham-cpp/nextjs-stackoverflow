"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter} from "next/navigation";
const FormSchema = z
  .object({
    fullName: z
      .string()
      .min(4, {
        message: "Name must be at least 4 characters.",
      })
      .max(32, {
        message: "Name must be less than 32 characters.",
      }),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/,
        {
          message:
            "Password must be at least 8 characters. Must contain at least two uppercase letter, two lowercase letter, two number, and one special character.",
        },
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    // TODO: Make api request
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.success === false) {
          console.log("resData", resData);
          return Promise.reject(resData);
        }
        toast({
          // variant: "destructive",
          title: "User Created successfully.",
          description: "Now you can login.",
          duration: 1500,
        });
        router.push("/login");
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Failed to register.",
          description: err.message,
          duration: 1500,
        });
        console.error("ERROR: while POST /api/register", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Form {...form}>
      <form
        className="flex w-[90svw] flex-col items-center space-y-4 sm:w-[40ch]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Eg: Bill Gates" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Eg: bill@hotmail.com"
                  autoCorrect="false"
                  autoCapitalize="false"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Eg: Strong&Complicated@9880"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription> */}
              {/*   This is your public display name. */}
              {/* </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Eg: Strong&Complicated@9880"
                  {...field}
                />
              </FormControl>
              <FormDescription>Should match the password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="my-4 w-full sm:w-[90%]"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2Icon size={24} className="mx-2 animate-spin" />
              <p>Creating...</p>
            </>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;

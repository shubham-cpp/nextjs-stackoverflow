"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/,
      {
        message: `Password must be at between 8-32 characters.
          Must contain at least 2 uppercase letter, 2 lowercase letter, 2 number, and 1 special character.`,
      },
    ),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // TODO: Make api request
    // console.log("done\n", data);
    setLoading(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((res) => {
        if (res?.error || !res?.ok) {
          toast({
            title: "Error while logging",
            description: "Invalid email or password",
            variant: "destructive",
            duration: 2000,
          });
        } else router.push("/");
      })
      .catch((err) => {
        toast({
          title: "Error while login",
          description: err.message,
          variant: "destructive",
          duration: 2000,
        });
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
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Eg: bill@hotmail.com"
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
                  placeholder="Eg: bill@hotmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="my-4 w-full sm:w-[90%]"
          loading={loading}
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

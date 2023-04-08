import React from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <form>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <div className=" mt-2 mb-2 text-center  text-white">
          <Button className="bg-black">Login</Button>
        </div>
      </form>
    </div>
  );
}

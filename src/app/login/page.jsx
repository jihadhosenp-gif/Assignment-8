
"use client";
import { useForm } from "react-hook-form"
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";



const loginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("User Data:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log("Sign In Response:", { data, error });

    };
    return (
        <div className="flex items-center justify-center min-h-screen  bg-gray-100">
            <div className=" bg-gray-400 text-blue-950 border-2 border-gray-400 w-[500px] h-[500px] rounded-lg shadow-md p-8">
                <Form className="flex w-96 flex-col gap-4  " onSubmit={onSubmit} >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2 justify-items-center">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
                <p className="text-center text-sm text-gray-600 p-5">
                    Don't have an account? <Link href="/register" className=" text-red-500 text-blue-500 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );

};

export default loginPage;
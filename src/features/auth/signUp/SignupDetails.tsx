"use client";

import { createClient } from "@/lib/supabase/client";
import CustomInput from "../../../components/CustomInput";
import { SignupFormData, signupSchema } from "../../../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignupDetails = () => {
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // const onSubmit = (data: SignupFormData) => {
  //   console.log("Form Data:", data);
  // };

  // const onSubmit = async (data: SignupFormData) => {
  //   const { email, password } = data;

  //   const { data: result, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     console.log("Signup error:", error.message);
  //     return;
  //   }

  //   console.log("User created:", result.user);
  // };

const [loading, setLoading] = useState(false);

const onSubmit = async (data: SignupFormData) =>{
  if(loading) return;
  setLoading(true)

  const {email, password} = data;

  const {error} = await supabase.auth.signUp({
    email,
    password,
  })

  setLoading(false)

  if(error) {
    console.log("Signup error:", error.message);
    return
  }
}




  return (
    <section className="flex gap-60  items-center  bg-white text-black">
      <div className="my-28 ">
        <Image
          src="/images/beatsnoop.svg"
          alt="beatsnoop"
          width={805}
          height={400}
          className="w-full"
        />
      </div>
      <div className=" space-y-10 ">
        <h4 className="text-3xl font-medium">Create an account</h4>
        <p className="text-base font-normal">Enter your details below</p>
        <form
          className="flex flex-col space-y-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            type="text"
            placeholder="Name"
            register={register("name")}
            error={errors.name}
          />
          <CustomInput
            type="text"
            placeholder="Email or Phone Number"
            register={register("email")}
            error={errors.email}
          />
          <CustomInput
            type="text"
            placeholder="Password"
            register={register("password")}
            error={errors.password}
          />
          <CustomInput
            type="password"
            placeholder="Confirm Password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />

          <button className="text-white bg-primary rounded-md py-3 px-7 hover:bg-blue-500">
            {loading ? "Creating acount...." : "Create Account"}
          </button>

          <button className=" w-[371px] gap-3 border border-gray-200 flex items-center rounded-md py-3 px-7">
            <Image
              src="/images/Icon-Google.svg"
              alt="googleIcon"
              width={24}
              height={24}
            />
            <span className="text-base font-normal"> Sign up with Google</span>
          </button>

          <p>
            Already have an acount?
            <Link
              href="/login"
              className="underline text-lg font-bold  text-primary inline-block hover:bg-blue-900 hover:text-white ml-2 "
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupDetails;

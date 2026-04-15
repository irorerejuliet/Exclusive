"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import Image from "next/image";
import { loginSchema } from "@/schema/auth";
import CustomInput from "../../../components/CustomInput";
import { useForm } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";

type LoginFormData = z.infer<typeof loginSchema>;


const LoginDetails = () => {
  const supabase = createClient()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const { email, password } = data;

    const { data: result, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Login error:", error.message);
      return;
    }

    console.log("Logged in:", result.user);
  };
  return (
    <div className="flex gap-60 items-center  py-28 bg-white text-black">
      <div>
        <Image src="/images/beatsnoop.svg" alt="beatsnoop" width={805} height={781}/>
      </div>
      <div className="w-[371px] space-y-10 ">
        <h4 className="text-3xl font-medium">Log in to Exclusive</h4>
        <p className="text-base font-normal">Enter your details below</p>
        <form
          className="flex flex-col space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <CustomInput
            type="text"
            placeholder="Email or Phone Number"
            register={register("email")}
            error={errors.email}
          />
          {/* Password */}
          <CustomInput
            type="text"
            placeholder="Password"
            register={register("password")}
            error={errors.password}
          />
          <div className="flex justify-between items-center">
            <button className="text-white bg-primary rounded-md py-2 px-4">
              Log in
            </button>

            <p className="text-base font-normal text-primary">
              Forget password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDetails;

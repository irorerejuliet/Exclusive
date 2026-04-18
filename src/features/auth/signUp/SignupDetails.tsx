"use client";

import CustomInput from "../../../components/CustomInput";
import { SignupFormData, signupSchema } from "../../../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type ApiError = {
  message: string;
};

const SignupDetails = () => {

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, status, error } = useMutation({
    mutationFn: async (payload: SignupFormData) => {
      const res = await axios.post("/api/auth/signup", payload);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error: AxiosError<ApiError>) => {
      return toast.error(error?.response?.data?.message);
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    mutate(data);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center bg-white text-black">
      <div className="my-10 lg:my-28 w-full lg:w-auto lg:flex justify-center  hidden">
        <Image
          src="/images/beatsnoop.svg"
          alt="beatsnoop"
          width={805}
          height={400}
          className="w-full max-w-md lg:max-w-none"
        />
      </div>

      <div className="space-y-10 max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full">
        <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
          Create an account
        </h4>

        <form
          className="flex flex-col space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            type="email"
            placeholder="you@gmail.com"
            register={register("email")}
            error={errors.email}
          />

          <div className="relative">
            <CustomInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              register={register("password")}
              error={errors.password}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={status === "pending"}
            className="text-white bg-primary rounded-md py-3 px-7 font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            {status === "pending" ? "Creating account..." : "Create Account"}
          </button>

          {status && (
            <p
              className={`text-sm text-center ${
                status === "error" ? "text-red-500" : "text-green-600"
              }`}
              role="alert"
            >
              {error?.response?.data?.message}
            </p>
          )}

          <button
            type="button"
            className="w-full gap-3 border border-gray-200 flex items-center justify-center rounded-md py-3 px-7 hover:bg-gray-50 transition"
          >
            <Image
              src="/images/Icon-Google.svg"
              alt="googleIcon"
              width={24}
              height={24}
            />
            <span className="text-base font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <Link
              href="/login"
              className="underline text-primary font-semibold ml-2 hover:opacity-80 transition"
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
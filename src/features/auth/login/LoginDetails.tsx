"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import CustomInput from "../../../components/CustomInput";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schema/auth/loginSchema";
import { createClient } from "@/lib/supabase/client";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginDetails = ({ redirect }: { redirect?: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, status, error, isError, isSuccess } = useMutation({
    mutationFn: async (payload: LoginFormData) => {
      const res = await axios.post("/api/auth/login", payload);
      return res.data;
    },

    onSuccess: (data) => {
      toast.success(data?.message);
      reset({ email: "", password: "" });

      const safeRedirect =
        redirect && redirect.startsWith("/") ? redirect : "/";

      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.replace(safeRedirect);
    },

    onError: (error: AxiosError<any>) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      console.error("Google OAuth error:", error.message);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="flex  items-center  py-28 bg-white text-black">
      <div className="">
        <Image
          src="/images/beatsnoop.svg"
          alt="beatsnoop"
          width={805}
          height={781}
        />
      </div>
      <div className="w-full max-w-md mx-auto space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h4 className="text-3xl font-semibold text-gray-900">
            Log in to Exclusive
          </h4>
          <p className="text-sm text-gray-500">
            Enter your details below to continue
          </p>
        </div>

        <button
          type="button"
          onClick={loginWithGoogle}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <Image
            src="/images/Icon-Google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form
          autoComplete="off"
          className="flex flex-col space-y-5  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            type="email"
            placeholder="Email"
            autoComplete="off"
            register={register("email")}
            error={errors.email}
          />

          <div className="relative ">
            <CustomInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="new-password"
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

          <div className="flex flex-col gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "pending"}
              className="w-full rounded-md bg-primary py-2.5 text-white font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "pending" ? "Logging in..." : "Log in"}
            </button>

            {isError && (
              <p className="text-sm text-center text-red-500" role="alert">
                {error?.response?.data?.message}
              </p>
            )}

            {isSuccess && (
              <p className="text-sm text-center text-green-600">
                Login successful
              </p>
            )}

            <div className="flex items-center justify-between text-sm">
              <Link href="/sign-up" className="text-primary hover:underline">
                Create account
              </Link>

              <p className="text-primary cursor-pointer hover:underline">
                Forgot password?
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDetails;

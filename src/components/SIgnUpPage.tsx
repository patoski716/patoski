"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Woman from "@assets/workwoman.png";
import axios from "axios";
import { toast } from "react-toastify";
import BaseUrl from "./Constants";

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${BaseUrl}contact-usinquire`, data);

      if (response.status === 200 || response.status === 201) {
        setStatus({
          type: "success",
          message:
            "Thank You for Signing Up! Check your Mail for more information!",
        });
        reset();
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      }
      reset();
    } catch (error) {
      console.error("Error sending message:", error);

      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 items-center place-items-center min-h-[90vh] bg-[#FFFFFF]">
      <div className="w-full max-w-[512px] mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="text-center">
            {status.type && (
              <div
                className={`mt-4 p-4 rounded-lg font-ClashDisplay text-[16px] ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}
            <p className="text-[32px] lg:text-[40px] font-ClashDisplaySemiBold text-[#48484A]">
              Create an account
            </p>
            <p className="font-ClashDisplay text-[16px] lg:text-[20px] text-[#48484A]">
              Securely access your account
            </p>
          </div>

          <div>
            <label className="block font-ClashDisplay text-[#48484A] text-[16px]">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("full_name", { required: "Full name is required" })}
              className="w-full mt-1 py-3 px-4 border border-[#48484A] rounded-md placeholder:text-[#48484A] focus:outline-none focus:ring-2 focus:ring-[#9B0000]"
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.full_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-ClashDisplay text-[#48484A] text-[16px]">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full mt-1 py-3 px-4 border border-[#48484A] rounded-md placeholder:text-[#48484A] focus:outline-none focus:ring-2 focus:ring-[#9B0000]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-ClashDisplay text-[#48484A] text-[16px]">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full mt-1 py-3 px-4 border border-[#48484A] rounded-md placeholder:text-[#48484A] focus:outline-none focus:ring-2 focus:ring-[#9B0000]"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-ClashDisplaySemiBold text-[16px] py-3 rounded-md transition ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#9B0000] hover:bg-red-700 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      <Image
        src={Woman}
        alt="Woman"
        width={512}
        height={512}
        priority
        className="hidden lg:block object-cover w-full h-full"
      />
    </div>
  );
};

export default SignUpPage;

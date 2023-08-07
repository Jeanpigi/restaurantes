import React from "react";
import Head from "next/head";
import SignupForm from "@/components/SignupForm";

const signup = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="mt-2">
        <SignupForm />
      </div>
    </>
  );
};

export default signup;

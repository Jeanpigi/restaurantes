import React from "react";
import Head from "next/head";
import LoginForm from "@/components/LoginForm";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="mt-2">
        <LoginForm />
      </div>
    </>
  );
};

export default login;

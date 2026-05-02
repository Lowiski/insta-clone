"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Account created ✔");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      setMessage("Cannot connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center px-20">
        <Image
          src="/images/insta.png"
          alt="Logo"
          width={120}
          height={40}
          className="mb-10"
        />

        <h1 className="text-[40px] max-w-lg">
          Join now and start sharing{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            your moments.
          </span>
        </h1>

        <img src="/images/ig.png" className="w-80 mt-10" />
      </div>

      <div className="hidden md:block w-[1px] bg-gray-200"></div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-[90%] max-w-[420px]">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Sign up for Instagram
          </h2>

          <form onSubmit={handleRegister}>

            {/* NAME */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 mb-3 border rounded-xl bg-gray-100"
            />

            {/* EMAIL */}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mb-3 border rounded-xl bg-gray-100"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mb-4 border rounded-xl bg-gray-100"
            />

            <button
              type="submit"
              disabled={!name || !email || !password || isLoading}
              className={`w-full py-3 rounded-full text-white ${
                name && email && password
                  ? "bg-blue-500"
                  : "bg-blue-300"
              }`}
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-3 text-red-500 text-sm">
              {message}
            </p>
          )}

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/")}
              className="text-blue-500 cursor-pointer"
            >
              Log in
            </span>
          </p>

        </div>
      </div>
    </main>
  );
}
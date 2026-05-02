"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Login successful ✔");
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } else {
        setMessage(data.message || "Login failed");
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
      <div className="hidden md:flex w-1/2 flex-col justify-center px-20 bg-white">
        <Image src="/images/insta.png" alt="Logo" width={120} height={40} className="mb-10" />

        <h1 className="text-[40px] font-normal leading-tight tracking-tight max-w-lg text-gray-900">
          See everyday moments from your{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-medium">
            close friends.
          </span>
        </h1>

        <div className="mt-12">
          <img src="/images/ig.png" alt="preview" className="w-80" />
        </div>
      </div>

      <div className="hidden md:block w-0.5 bg-gray-200"></div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
        <p className="absolute top-6 text-gray-400 text-sm md:hidden">English (US)</p>

        <div className="w-[90%] max-w-[420px]">
          <div className="flex justify-center mb-6 md:hidden">
            <Image src="/images/insta.png" alt="Logo" width={80} height={40} />
          </div>

          <h2 className="text-xl font-semibold mb-6 text-center md:text-left text-gray-900">
            Log into Instagram
          </h2>

          <form onSubmit={handleLogin}>
            {/* EMAIL */}
            <div className="relative mb-4">
              <input
                type="text"
                id="username"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-5 pt-7 pb-2 text-base border border-gray-300 rounded-2xl bg-gray-100 focus:outline-none focus:border-gray-400 text-gray-900"
              />
              <label
                htmlFor="username"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all
                peer-focus:top-3 peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Mobile number, username or email
              </label>
            </div>

            {/* PASSWORD */}
            <div className="relative mb-5">
              <input
                type="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-5 pt-7 pb-2 text-base border border-gray-300 rounded-2xl bg-gray-100 focus:outline-none focus:border-gray-400 text-gray-900"
              />
              <label
                htmlFor="password"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-base transition-all
                peer-focus:top-3 peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              disabled={!email || !password || isLoading}
              className={`w-full py-4 rounded-full mb-5 font-semibold text-white ${
                email && password && !isLoading
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-300"
              }`}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {message && (
            <p className={`text-center text-sm mb-4 ${
              message.includes("successful") ? "text-green-600" : "text-red-500"
            }`}>
              {message}
            </p>
          )}

          <p className="text-center text-sm mb-8 cursor-pointer text-gray-700 hover:underline">
            Forgot password?
          </p>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-4 rounded-full mb-4 text-sm font-medium hover:bg-gray-50">
            Log in with Facebook
          </button>

          {/* ✅ THIS IS NOW CONNECTED */}
          <button
            onClick={() => router.push("/signup")}
            className="w-full border border-blue-500 text-blue-600 py-4 rounded-full text-sm font-medium hover:bg-blue-50"
          >
            Create new account
          </button>
        </div>

        <div className="absolute bottom-6 text-gray-400 text-xs">
          Meta
        </div>
      </div>
    </main>
  );
}
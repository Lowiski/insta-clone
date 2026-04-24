import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">

      <div className="hidden md:flex w-1/2 flex-col justify-center px-20 bg-white">
        <Image
          src="/images/insta.png"
          alt="Logo"
          width={120}
          height={40}
          className="mb-10"
        />

        <h1 className="text-[40px] font-normal leading-tight tracking-tight max-w-lg text-gray-900">
          See everyday moments from your{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-medium">
            close friends.
          </span>
        </h1>

        <div className="mt-12">
          <img
            src="/images/ig.png"
            alt="preview"
            className="w-80"
          />
        </div>
      </div>

      <div className="hidden md:block w-0.5 bg-gray-200"></div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">

        <p className="absolute top-6 text-gray-400 text-sm md:hidden">
          English (US)
        </p>

        <div className="w-[90%] max-w-[420px]">

          <div className="flex justify-center mb-6 md:hidden">
            <Image
              src="/images/insta.png"
              alt="Logo"
              width={80}
              height={40}
            />
          </div>

          <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
            Log into Instagram
          </h2>

          <div className="relative mb-4">
            <input
              type="text"
              id="username"
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 text-base border border-gray-300 rounded-2xl bg-gray-100 focus:outline-none"
            />
            <label
              htmlFor="username"
              className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-200
              peer-placeholder-shown:top-5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 
              peer-focus:text-xs 
              peer-focus:text-gray-600"
            >
              Mobile number, username or email
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              id="password"
              placeholder=" "
              className="peer w-full px-5 pt-6 pb-3 text-base border border-gray-300 rounded-2xl bg-gray-100 focus:outline-none"
            />
            <label
              htmlFor="password"
              className="absolute left-5 top-4 text-gray-500 text-sm transition-all duration-200
              peer-placeholder-shown:top-5 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2 
              peer-focus:text-xs 
              peer-focus:text-gray-600"
            >
              Password
            </label>
          </div>

          <button className="w-full bg-blue-300 text-white py-4 rounded-full mb-5 font-semibold cursor-not-allowed">
            Log in
          </button>

          <p className="text-center text-sm mb-8 cursor-pointer">
            Forgot password?
          </p>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-4 rounded-full mb-4 text-sm font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
            </svg>
            Log in with Facebook
          </button>

          <button className="w-full border border-blue-500 text-blue-600 py-4 rounded-full text-sm font-medium">
            Create new account
          </button>

        </div>

        <div className="absolute bottom-6 flex items-center gap-2 text-gray-400 text-xs">
          <svg width="20" height="12" viewBox="0 0 38 20" fill="none">
            <path
              d="M5 15C2 15 1 5 6 5C10 5 13 15 19 15C25 15 28 5 32 5C37 5 36 15 33 15"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span>Meta</span>
        </div>

      </div>

    </main>
  );
}
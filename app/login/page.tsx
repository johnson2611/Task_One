function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="w-full h-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:mt-20">
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-5xl 2xl:text-7xl font-black text-center text-[#1F2B6C]">
              <span>Login</span>
            </p>
            <p className="text-center text-base text-gray-700">
              Keep all your credentials safe
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            action=""
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14 mt-20"
          >
            <div className="">
              <p className="text-[#1F2B6C] text-3xl font-bold text-center">
                Welcome Back !!!
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                placeholder="email@example.com"
                name="email"
                required
                className="w-full rounded-full border-2 border-gray-300 p-3 text-gray-700"
              />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="w-full rounded-full border-2 border-gray-300 p-3 text-gray-700"
              />
              <button
                type="submit"
                className="w-full h-10 bg-[#1F2B6C] text-white rounded-full"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center">
              <a href="/">
                <span className="text-xl text-black text-center hover:text-[#1F2B6C] hover:underline cursor-pointer">
                  Sign Up
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

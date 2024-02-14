import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async () => {
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center sm:min-w-[450px] md:min-w-[500px] min-w-full mx-auto">
      <div className="w-full rounded-lg sm:px-6 py-6 px-3 shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="sm:text-3xl text-2xl font-semibold text-gray-300">
          Log in
        </h1>
        <form
          className="my-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered placeholder-gray-600 h-12"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="**********"
              className="w-full input input-bordered placeholder-gray-600 h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <div className="my-3">
              First time using WhisperWave?{" "}
              <Link
                to="/register"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Register!
              </Link>
            </div>

            <div>
              <button
                className="w-full p-2 bg-blue-500 text-white rounded-xl h-12"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Log in"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

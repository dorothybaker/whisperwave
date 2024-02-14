import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck";
import { useState } from "react";
import { toast } from "react-toastify";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const { loading, register } = useRegister();

  const handleGender = (gender) => {
    setGender(gender);
  };

  const handleSubmit = async () => {
    if (confirmPassword === password) {
      const inputs = {
        fullName: fullName,
        username: username,
        password: password,
        gender: gender,
      };

      await register(inputs);

      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setGender("");
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex flex-col items-center sm:min-w-[450px] md:min-w-[500px] min-w-full mx-auto">
      <div className="w-full rounded-lg sm:px-6 py-6 px-3 shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="sm:text-3xl text-2xl font-semibold text-gray-300">
          Create an account
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
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full input input-bordered h-12 placeholder-gray-600"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="janedoe"
              className="w-full input input-bordered h-12 placeholder-gray-600"
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
              className="w-full input input-bordered h-12 placeholder-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="**********"
              className="w-full input input-bordered h-12 placeholder-gray-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <GenderCheck onChangeGender={handleGender} gender={gender} />

          <div className="my-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login!
            </Link>
          </div>

          <div>
            <button
              className="w-full p-2 h-12 text-base bg-blue-500 text-white rounded-xl flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

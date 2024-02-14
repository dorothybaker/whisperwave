import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center sm:w-[500px] w-full mx-auto">
      <div className="w-full rounded-lg sm:px-6 py-6 px-3 shadow-md bg-gray-400/0 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div className="flex gap-2 items-center mb-1">
          <img
            src="https://www.svgrepo.com/show/232330/chat.svg"
            alt="logo"
            width={35}
          />
          <h1 className="font-semibold text-2xl text-gray-300">WhisperWave</h1>
        </div>
        <p className="font-semibold">
          Embark on a journey of whispered conversations with WhisperWave.
        </p>

        <div className="my-5">
          <p>
            Welcome to WhisperWave, where every whisper carries the power to
            create ripples of meaningful connections. Join us and dive into a
            world where your words resonate, creating waves of lasting
            relationships. Start your whisper journey today and explore the
            magic of connection with WhisperWave.
          </p>
        </div>

        <button className="btn btn-neutral text-base">
          <Link to="/login">Get Started</Link>
        </button>
      </div>
    </div>
  );
}

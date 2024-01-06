"use client";
import { useState } from "react";
import { USERS } from "../utils/generateFakeUsers";
import SuggestedUser from "./SuggestedUser";

const Suggestions = () => {
  const [count, setCount] = useState(5);
  const [btnStatus, setBtnStatus] = useState("See all");
  const suggestedUsers = USERS;
  return (
    <div className="mt-4 ml-10">
      <div className="flex items-center justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400"> Suggestions for you </h3>
        <button
          className="text-gray-600 font-semibold"
          onClick={() => {
            btnStatus === "See all"
              ? setBtnStatus("See less")
              : setBtnStatus("See all");
            btnStatus === "See all"
              ? setCount(suggestedUsers.length)
              : setCount(5);
          }}
        >
          {btnStatus}
        </button>
      </div>
      <div className="overflow-y-scroll max-h-[400px] scrollbar-thin scrollbar-thumb-gray-400">
        {suggestedUsers.map(
          (user, index) =>
            index < count && <SuggestedUser key={user.userId} user={user} />
        )}
      </div>
    </div>
  );
};

export default Suggestions;

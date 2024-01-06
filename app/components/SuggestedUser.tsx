import { User } from "../utils/generateFakeUsers";

interface Props {
  user: User;
}
const SuggestedUser = ({ user: { username, avatar, job } }: Props) => {
  return (
    <div className="flex items-center mb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar}
        alt={`${username} avatar`}
        className="h-10 rounded-full border p-[2px]"
      />
      <div className="text-sm pl-2">
        <h2 className="font-semibold  truncate text-gray-700">{username}</h2>
        <h3 className="text-gray-400 truncate w-[230px]"> {job} </h3>
      </div>
      <button className="font-semibold text-blue-400  text-sm ml-1">
        Follow
      </button>
    </div>
  );
};

export default SuggestedUser;

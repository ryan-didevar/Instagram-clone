import { USERS } from "../utils/generateFakeUsers";
import Story from "./Story";
const Stories = () => {
  const storyUsers = USERS;
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      <Story users={storyUsers} />
    </div>
  );
};

export default Stories;

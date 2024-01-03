import { USERS } from "../utils/generateFakeUsers";
import Story from "./Story";
const Stories = () => {
  const storyUsers = USERS;
  return (
    <div>
      <Story users={storyUsers} />
    </div>
  );
};

export default Stories;

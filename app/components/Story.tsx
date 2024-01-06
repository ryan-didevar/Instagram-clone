import Image from "next/image";
import { User } from "../utils/generateFakeUsers";
interface Props {
  users: User[];
}
const Story = ({ users }: Props) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.userId}>
          <Image
            className="rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out"
            src={user.avatar}
            alt={user.username}
            width={56}
            height={56}
          />
          <p className="text-xs w-14 truncate">{user.username}</p>
        </div>
      ))}
    </>
  );
};

export default Story;

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
          {user.username}
          <Image
            className="rounded-full"
            src={user.avatar}
            alt={user.username}
            width={50}
            height={50}
          />
        </div>
      ))}
    </>
  );
};

export default Story;

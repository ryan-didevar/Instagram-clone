import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
interface Props {
  userImg: string;
  username: string;
}
const PostHeader = ({ userImg, username }: Props) => {
  return (
    <div className="flex items-center p-5">
      <Image
        src={userImg}
        alt="user-image"
        width={50}
        height={50}
        className="rounded-full cursor-pointer object-cover border p-1"
      />
      <p className="font-bold flex-1 ml-5">{username}</p>
      <HiDotsHorizontal className="h-5" />
    </div>
  );
};

export default PostHeader;

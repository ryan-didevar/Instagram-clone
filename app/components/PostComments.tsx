import { HiOutlineEmojiHappy } from "react-icons/hi";
interface Props {
  username: string;
  caption: string;
}
const PostComments = ({ username, caption }: Props) => {
  return (
    <>
      <p className="p-5 truncate">
        <span className="font-bold">{username} </span> {caption}{" "}
      </p>
      <form action="" className="flex items-center p-4">
        <HiOutlineEmojiHappy className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment ..."
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </>
  );
};

export default PostComments;

import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";

interface Props {
  post: {
    id: number;
    username: string;
    userImg: string;
    img: string;
    caption: string;
  };
}
const Post = ({ post: { id, username, userImg, img, caption } }: Props) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <PostHeader userImg={userImg} username={username} />
      <img className="object-cover w-full" src={img} alt={caption} />
      <PostButtons />
    </div>
  );
};

export default Post;

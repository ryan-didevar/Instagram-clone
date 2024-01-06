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
    <div>
      <h1>{username}</h1>
      <img src={userImg} className="h-14 w-14" alt={`${username} Profile`} />
      <img src={img} className="w-40" alt={caption} />
      <p>{caption}</p>
    </div>
  );
};

export default Post;

import Post from "./Post";

const posts: {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}[] = [
  {
    id: 1,
    username: "Abbas",
    userImg:
      "https://media.licdn.com/dms/image/D4E35AQEP6ONKbJUGZw/profile-framedphoto-shrink_400_400/0/1681760309205?e=1703494800&v=beta&t=zl-Kt6BZZXI0e7PaE1avrm7d20jXVvArDxdyYwRlsx0",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPyIHI1_IEp3RtZiGNDD-LqZK04yIgfHY8Hio5kXznQ&s",
    caption: "A long river",
  },
  {
    id: 1,
    username: "Abbas",
    userImg:
      "https://media.licdn.com/dms/image/D4E35AQEP6ONKbJUGZw/profile-framedphoto-shrink_400_400/0/1681760309205?e=1703494800&v=beta&t=zl-Kt6BZZXI0e7PaE1avrm7d20jXVvArDxdyYwRlsx0",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUrbIMN2m7OeTvH0QKjd9G7DTJ88DxWvaYpjTKEuA2Q&s",
    caption: "A beautiful flower shot",
  },
];
const Posts = () => {
  return (
    <div className="max-w-6xl m-auto flex flex-col justify-center">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;

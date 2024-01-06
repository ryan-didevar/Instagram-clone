import Posts from "./components/Posts";
import Stories from "./components/Stories";

const Feed = () => {
  return (
    <main>
      <section>
        {/* Story */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section>
        {/* Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;

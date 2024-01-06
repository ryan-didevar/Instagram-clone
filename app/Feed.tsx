import MiniProfile from "./components/MiniProfile";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import Suggestions from "./components/Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Story */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:grid-cols-1">
        <div className="fixed w-[380px] justify-center">
          {/* MiniProfile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Feed;

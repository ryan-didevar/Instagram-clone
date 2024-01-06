import { HiOutlineHeart, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoBookmarkOutline } from "react-icons/io5";
const PostButtons = () => {
  return (
    <div className="flex items-center p-2 px-5">
      <div className=" flex flex-1 items-center space-x-3">
        <HiOutlineHeart className="btn" />
        <HiOutlineChatBubbleOvalLeft className="btn" />
        <RiSendPlaneFill className="btn" />
      </div>
      <IoBookmarkOutline className="btn" />
    </div>
  );
};

export default PostButtons;

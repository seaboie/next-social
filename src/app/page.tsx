import AddPost from "@/components/add_post";
import Feed from "@/components/feed";
import LeftMenu from "@/components/left_menu";
import RightMenu from "@/components/right_menu";
import Stories from "@/components/stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;

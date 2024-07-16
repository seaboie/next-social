import Image from "next/image";

export default function AddPost() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex justify-between gap-4 text-sm">
      {/* AVATAR  */}
      <Image
        src={
          "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        }
        width={48}
        height={48}
        alt=""
        priority
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST  */}
      <div className="flex-1">
        {/* TEXT INPUT  */}
        <div className="flex gap-4">
          <textarea
            placeholder="What 's on your mind?"
            className="p-2 flex-1 bg-slate-100 rounded-lg"
          ></textarea>
          <Image
            src={"/emoji.png"}
            width={20}
            height={20}
            alt=""
            priority
            className="w-5 h-5 object-cover rounded-full cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className="mt-4 flex items-center gap-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addimage.png"}
              width={20}
              height={20}
              alt=""
              priority
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addVideo.png"}
              width={20}
              height={20}
              alt=""
              priority
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/poll.png"}
              width={20}
              height={20}
              alt=""
              priority
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/addevent.png"}
              width={20}
              height={20}
              alt=""
              priority
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}

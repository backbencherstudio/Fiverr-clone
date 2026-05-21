import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import LevelIcon from "../icons/LevelIcon";
import { TiStar } from "react-icons/ti";
import VideoIcon from "../icons/VideoIcon";

export default function GigCard() {
  return (
    <div>
      <div className="rounded-xl bg-red-500 overflow-hidden relative">
        <Image
          src="/card2.jpg"
          alt="gig image"
          width={500}
          height={500}
          className=" w-full h-full  object-cover scale-x-115"
        />
        <button className="absolute top-5 right-5">
          <BsHeart size={24} className="text-white" />
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Profile image"
            className="w-6 h-6 rounded-full"
          />
          <Link
            href="/user/nafiz-al-turabi"
            className="text-sm font-semibold hover:underline"
          >
            Nafiz Al Turabi
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-sm font-semibold text-black">Level2</h3>
          <div className="flex gap-px -mb-0.5">
            <LevelIcon />
            <LevelIcon />
            <span className="text-gray-300">
              <LevelIcon />
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-sm lg:text-base hover:underline cursor-pointer">I will be your professional full stack python django web developer</h3>
      <div>
        <div className="flex items-center my-2">
            <TiStar size={22} />
            <p className="font-semibold">5.0 <span className="font-normal text-[#a0a3a8]">(450)</span></p>
        </div>
        <p className="font-bold">From $100</p>
        <p className="font-semibold text-[#4d4d4e] flex gap-2 items-center mt-2"> <VideoIcon /> Offers video consultations</p>
      </div>
    </div>
  );
}

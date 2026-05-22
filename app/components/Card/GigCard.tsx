import Image from "next/image";
import Link from "next/link";
import { BsHeart, BsTrash3 } from "react-icons/bs";
import LevelIcon from "../icons/LevelIcon";
import { TiStar } from "react-icons/ti";
import VideoIcon from "../icons/VideoIcon";
import { RiLoader2Fill } from "react-icons/ri";

type GigCardProps = {
  id?: string;
  title?: string;
  imageSrc?: string;
  onDelete?: () => void;
  isDeleting?: boolean;
};

export default function GigCard({
  id,
  title = "I will be your professional full stack python django web developer",
  imageSrc = "/card2.jpg",
  onDelete,
  isDeleting = false,
}: GigCardProps) {
  const detailHref = id ? `/${id}` : undefined;

  return (
    <div className = "relative group duration-300">
      <div className="rounded-xl overflow-hidden relative">
        <Image
          src={imageSrc}
          alt="gig image"
          width={500}
          height={500}
          className=" w-full h-50 object-cover scale-x-110"
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
      {detailHref ? (
        <Link
          href={detailHref}
          className="text-sm lg:text-base cursor-pointer hover:underline"
        >
          {title}
        </Link>
      ) : (
        <h3 className="text-sm lg:text-base cursor-pointer">{title}</h3>
      )}
      <div>
        <div className="flex items-center my-2">
            <TiStar size={22} />
            <p className="font-semibold">5.0 <span className="font-normal text-[#a0a3a8]">(450)</span></p>
        </div>
        <p className="font-bold">From $100</p>
        <p className="font-semibold text-[#4d4d4e] flex gap-2 items-center mt-2"> <VideoIcon /> Offers video consultations</p>
        {onDelete ? (
          <button
            type="button"
            onClick={onDelete}
            disabled={isDeleting}
            className="absolute bottom-0 right-4 hidden group-hover:block mt-4 duration-200 items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isDeleting ? <RiLoader2Fill size={14} /> : <BsTrash3 size={14} />}
          </button>
        ) : null}
      </div>
    </div>
  );
}

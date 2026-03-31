import { Dot } from "lucide-react";
import { Link } from "react-router";

import defaultImage from "/default-image.png";

export const CardItem = () => {
  return (
    <Link
      to={"/product/123"}
      className="bg-white rounded-[8px] cursor-pointer shrink-0"
    >
      <div className="bg-gray-50 h-37.5 rounded-b-xl overflow-hidden">
        <img src={defaultImage} className="w-full  h-full" />
      </div>
      <div className="px-4 py-2 flex flex-col gap-2">
        <p className="text-base">Наушники</p>
        <small className="text-secondary-45 font-bold text-base">2990 ₽</small>

        <div className="rounded bg-[rgba(250,173,20,1)]/10 flex items-center text-[rgba(250,173,20,1)] py-0.5">
          <Dot size={20} />
          <p className="text-base">Требует доработок</p>
        </div>
      </div>
    </Link>
  );
};

import { Dot } from "lucide-react";

export const CardItem = () => {
  return (
    <div className="bg-white rounded-[8px] min-w-50 cursor-pointer shrink-0">
      <div className="bg-gray-50 h-37.5 rounded-b-xl"></div>
      <div className="px-4 py-2 flex flex-col gap-2">
        <p className="text-base">Наушники</p>
        <small className="text-secondary-45 font-bold text-base">2990 ₽</small>

        <div className="rounded bg-[rgba(250,173,20,1)]/10 flex items-center text-[rgba(250,173,20,1)] py-0.5">
          <Dot size={20} />
          <p className="text-base">Требует доработок</p>
        </div>
      </div>
    </div>
  );
};

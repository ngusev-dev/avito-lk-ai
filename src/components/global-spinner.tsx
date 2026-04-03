import { Spinner } from "./ui";

export const GlobalSpinner = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Spinner className="size-10" />
        <p className="text-gray-500">Загрузка страницы...</p>
      </div>
    </div>
  );
};

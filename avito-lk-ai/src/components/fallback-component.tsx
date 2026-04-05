import { ServerCrash } from "lucide-react";

export function FallbackComponent() {
  return (
    <div className="flex h-svh items-center justify-center">
      <div className="flex justify-center flex-col items-center gap-2">
        <ServerCrash size={64} strokeWidth={1} />
        <h1 className="text-xl font-semibold">Произошла ошибка</h1>
        <p className="text-gray-500">Попробуйте обновить страницу.</p>
      </div>
    </div>
  );
}

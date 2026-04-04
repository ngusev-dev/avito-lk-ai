import { AlertCircle } from "lucide-react";
import type { AdItem } from "../services";
import { adValidationFields, CATEGORY_PARAMS_FIELDS } from "../shared";

interface AdSpecificationsTableProps {
  item: AdItem;
}

export const AdSpecificationsTable = ({ item }: AdSpecificationsTableProps) => {
  const params = item.params;
  const fields = CATEGORY_PARAMS_FIELDS[item.category];

  const adValidationFieldsData = adValidationFields(item);

  return (
    <div className="col-start-2 row-start-1 flex flex-col gap-7 row-span-2">
      {adValidationFieldsData.length > 0 && (
        <div className="bg-[rgba(249,241,230,1)]/80 p-4 rounded-xl max-w-125 flex flex-col gap-2 shadow">
          <h2 className="font-semibold text-base flex flex-gap gap-2 items-center">
            <AlertCircle size={18} color="rgba(255,169,64,1)" />
            Требуются доработки
          </h2>
          <p>У объявления не заполнены поля:</p>
          <ul className="list-disc ml-6">
            {adValidationFieldsData.map((key) => (
              <li key={key.toString()}>
                {fields[key as keyof typeof fields] ?? "Описание"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {Object.keys(params).length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-basexl ">Характеристики</h2>
          <ul className="table-auto w-fit">
            {Object.entries(fields).map(([key, label]) => {
              const value = params[key as keyof typeof params];

              if (value === undefined || value === null || value === "")
                return null;

              return (
                <li
                  key={key.toString()}
                  className="flex justify-between gap-20"
                >
                  <p className="text-gray-500 w-fit">{label}</p>
                  <p>{String(value)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

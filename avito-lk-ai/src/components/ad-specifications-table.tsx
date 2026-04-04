import { AlertCircle } from "lucide-react";
import type { AdItem } from "../services";
import { adValidationFields, CATEGORY_PARAMS_FIELDS } from "../shared";
import { AD_DROP_LIST_MAP } from "@/shared/constants/drop-list-map.constants";

interface AdSpecificationsTableProps {
  item: AdItem;
}

export const AdSpecificationsTable = ({ item }: AdSpecificationsTableProps) => {
  const params = item.params;
  const fields = CATEGORY_PARAMS_FIELDS[item.category];

  const adValidationFieldsData = adValidationFields(item);

  return (
    <div className=" flex col-start-1 row-start-3 flex-col gap-7 row-span-2 md:col-start-2  md:row-start-1">
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

              const defaultKey = item.category as keyof typeof AD_DROP_LIST_MAP;
              const keyWithCategory =
                `${item.category}_${key}` as keyof typeof AD_DROP_LIST_MAP;

              return (
                <li
                  key={key.toString()}
                  className="flex justify-between gap-20"
                >
                  <p className="text-gray-500 w-fit">{label}</p>
                  <p>
                    {defaultKey in AD_DROP_LIST_MAP
                      ? value in
                        AD_DROP_LIST_MAP[
                          defaultKey as keyof typeof AD_DROP_LIST_MAP
                        ]
                        ? AD_DROP_LIST_MAP[
                            defaultKey as keyof typeof AD_DROP_LIST_MAP
                          ][value]
                        : String(value)
                      : keyWithCategory in AD_DROP_LIST_MAP
                        ? value in
                          AD_DROP_LIST_MAP[
                            keyWithCategory as keyof typeof AD_DROP_LIST_MAP
                          ]
                          ? AD_DROP_LIST_MAP[
                              keyWithCategory as keyof typeof AD_DROP_LIST_MAP
                            ][value]
                          : String(value)
                        : String(value)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

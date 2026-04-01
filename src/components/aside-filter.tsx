import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldGroup,
  Label,
  Separator,
  Switch,
} from "./ui";
import { AD_CATEGORY } from "../shared";
import { useAdsGlobalFilterStore } from "../store";

export const AsideFilter = () => {
  const filter = useAdsGlobalFilterStore((store) => store.filter);
  const setFilter = useAdsGlobalFilterStore((store) => store.setFilter);

  const categoryCheckedHandler = (categoryKey: string) => {
    const newSelected = filter.categories?.includes(categoryKey)
      ? filter.categories?.filter((cat) => cat !== categoryKey)
      : [...(filter.categories ?? []), categoryKey];

    setFilter({ categories: newSelected });
  };

  const isCategorySelected = (categoryKey: string) =>
    filter.categories?.includes(categoryKey) ?? false;

  return (
    <aside className="flex flex-col gap-4 w-full md:max-w-[256px]">
      <div className="bg-white p-3 rounded-[8px] w-full flex flec-col gap-2 flex-col">
        <h4 className="font-semibold">Фильтры</h4>

        <Collapsible className="flex flex-col gap-1" defaultOpen={true}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="group w-full bg-transparent hover:bg-transparent p-0 font-normal"
            >
              Категория
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FieldGroup className="gap-3">
              {Object.entries(AD_CATEGORY).map(([key, name]) => (
                <Field orientation="horizontal" key={key}>
                  <Checkbox
                    id={key}
                    name="filter"
                    checked={isCategorySelected(key)}
                    onCheckedChange={() => categoryCheckedHandler(key)}
                  />
                  <Label htmlFor={key}>{name}</Label>
                </Field>
              ))}
            </FieldGroup>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <div className="flex items-center gap-2">
          <Label
            htmlFor="needsRevision-checkbox"
            className=" font-semibold leading-5"
          >
            Только требующие доработок
          </Label>
          <Switch
            id="needsRevision-checkbox"
            name="needsRevision"
            checked={filter.needsRevision}
            onCheckedChange={(checked) => setFilter({ needsRevision: checked })}
          />
        </div>
      </div>

      <Button
        className="h-10 disabled:opacity-100 disabled:bg-white disabled:text-gray-300"
        onClick={() =>
          setFilter({
            needsRevision: false,
            categories: undefined,
          })
        }
      >
        Сбросить фильтры
      </Button>
    </aside>
  );
};

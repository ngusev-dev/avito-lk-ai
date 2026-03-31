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

export const AsideFilter = () => {
  return (
    <aside className="flex flex-col gap-4 w-full md:max-w-[256px]">
      <div className="bg-white p-3 rounded-[8px] w-full flex flec-col gap-2 flex-col">
        <h4 className="font-semibold">Фильтры</h4>

        <Collapsible className="flex flex-col gap-1" defaultOpen={true}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="group w-full bg-transparent hover:bg-transparent p-0"
            >
              Категория
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox id="car-checkbox" name="filter" />
                <Label htmlFor="car-checkbox">Авто</Label>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="electronic-checkbox" name="filter" />
                <Label htmlFor="electronic-checkbox">Электроника</Label>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="test-checkbox" name="filter" />
                <Label htmlFor="test-checkbox">Авто</Label>
              </Field>
            </FieldGroup>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <div className="flex items-center gap-2">
          <Label htmlFor="all-checkbox" className=" font-semibold leading-5">
            Только требующие доработок
          </Label>
          <Switch id="all-checkbox" name="test" />
        </div>
      </div>

      <Button
        className="h-10 disabled:opacity-100 disabled:bg-white disabled:text-gray-300"
        disabled
      >
        Сбросить фильтры
      </Button>
    </aside>
  );
};

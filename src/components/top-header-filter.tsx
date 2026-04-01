import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui";

export const TopHeaderFilter = () => {
  return (
    <div className="bg-white p-3 rounded-[8px] flex gap-2">
      <InputGroup className="bg-background border-0">
        <InputGroupInput placeholder="Найти объявление..." />
        <InputGroupAddon align="inline-end">
          <Search size={20} />
        </InputGroupAddon>
      </InputGroup>

      <Select defaultValue="az">
        <SelectTrigger className="w-full max-w-62 bg-white border-background border-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="az">По названию (А → Я)</SelectItem>
            <SelectItem value="za">По названию (Я → А)</SelectItem>
            <SelectItem value="new">По новизне (сначала новые)</SelectItem>
            <SelectItem value="old">По новизне (сначала старые)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

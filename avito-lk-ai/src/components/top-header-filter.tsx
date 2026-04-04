import { Search } from "lucide-react";

import { useAdsGlobalFilterStore } from "../store";
import { useDebounce } from "../hooks";
import { useEffect, useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const TopHeaderFilter = () => {
  const filter = useAdsGlobalFilterStore((store) => store.filter);
  const setFilter = useAdsGlobalFilterStore((store) => store.setFilter);

  const [searchTerm, setSearchTerm] = useState("");
  const debaunceValue = useDebounce(searchTerm, 400);

  const sortValue = `${filter.sortColumn},${filter.sortDirection}`;

  const sortChangeHandler = (sort: string) => {
    const [sortColumn, sortDirection] = sort.split(",");
    setFilter({
      sortColumn: sortColumn as "title" | "createdAt",
      sortDirection: sortDirection as "asc" | "desc",
    });
  };

  useEffect(() => {
    setFilter({ q: debaunceValue });
  }, [debaunceValue]);

  return (
    <div className="bg-white p-3 rounded-[8px] flex gap-2">
      <InputGroup className="bg-background border-0">
        <InputGroupInput
          placeholder="Найти объявление..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <Search size={20} />
        </InputGroupAddon>
      </InputGroup>

      <Select defaultValue={sortValue} onValueChange={sortChangeHandler}>
        <SelectTrigger className="w-full max-w-62 bg-white border-background border-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="title,desc">По названию (А → Я)</SelectItem>
            <SelectItem value="title,asc">По названию (Я → А)</SelectItem>
            <SelectItem value="createdAt,desc">
              По новизне (сначала новые)
            </SelectItem>
            <SelectItem value="createdAt,asc">
              По новизне (сначала старые)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { FilterDropdown } from "./filter-dropdown";
import { Download, Plus } from "lucide-react";

type DropdownConfig = {
  label: string;
  items: string[];
};

type ToolbarProps = {
  dropdowns: DropdownConfig[];
};

export function FiltersToolbar({ dropdowns }: ToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-between w-full">
      {/* Search */}
      <SearchInput placeholder="Search Orders" />

      {/* Dropdowns */}
      <div className="flex items-center gap-2 overflow-auto">
        {dropdowns.map((d) => (
          <FilterDropdown key={d.label} label={d.label} items={d.items} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Button variant="outline" className="px-4">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button className="px-4">
          <Plus className="h-4 w-4 mr-2" />
          Add Order
        </Button>
      </div>
    </div>
  );
}

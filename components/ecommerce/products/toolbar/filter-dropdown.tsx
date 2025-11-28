import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type FilterDropdownProps = {
  label: string;
  items: string[];
};

export function FilterDropdown({ label, items }: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-4">
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, idx) => (
          <DropdownMenuItem key={idx}>{item}</DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>More options…</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

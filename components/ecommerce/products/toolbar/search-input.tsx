"use client";

import { Search } from "lucide-react";

export function SearchInput({ placeholder = "Search..." }) {
  return (
    <div className="relative w-full max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

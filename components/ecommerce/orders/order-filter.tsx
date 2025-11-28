"use client";

type StatusItem = {
  label: string;
  count: number;
  onClick?: () => void; // optional action
};

type OrderStatusFilterProps = {
  items: StatusItem[];
  active?: string; // which label is currently selected
};

export function OrderStatusFilter({ items, active }: OrderStatusFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 lg:gap-4 mx-1 font-medium">
      {items.map((item) => {
        const isActive = active === item.label;

        return (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`cursor-pointer text-xs flex items-center gap-1 transition ${
              isActive
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            <span>{item.label}</span>
            <span className="text-black/50">({item.count})</span>
          </button>
        );
      })}
    </div>
  );
}

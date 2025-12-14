"use client";

import {
  User,
  Mail,
  Phone,
  CalendarCheck,
  Gift,
  Home,
  House,
} from "lucide-react";

interface DetailGridProps {
  data: {
    name: string;
    email: string;
    phone: string;
    shippingDate: string;
    giftOrder: string;
    address1: string;
    shippingAddress: string;
  };
}

export default function DetailCards({ data }: DetailGridProps) {
  const items = [
    {
      label: "Customer Name",
      value: data.name,
      icon: <User className="w-5 h-5" />,
    },
    {
      label: "Email",
      value: data.email,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: "Phone",
      value: data.phone,
      icon: <Phone className="w-5 h-5" />,
    },
    {
      label: "Shipping Date",
      value: data.shippingDate,
      icon: <CalendarCheck className="w-5 h-5" />,
    },
    {
      label: "Gift Order",
      value: data.giftOrder,
      icon: <Gift className="w-5 h-5" />,
    },
    {
      label: "Address 1",
      value: data.address1,
      icon: <Home className="w-5 h-5" />,
    },
    {
      label: "Shipping Address",
      value: data.shippingAddress,
      icon: <House className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 border p-4 rounded-xl"
        >
          <div className="text-primary">{item.icon}</div>
          <div>
            <p className="font-semibold mb-1">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

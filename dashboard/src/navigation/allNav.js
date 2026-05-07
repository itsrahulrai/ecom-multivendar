import {
  LayoutDashboard,
  Tags,
  Users,
  UserPlus,
  Package,
  ShoppingCart,
  CreditCard,
  Boxes,
  MessageCircle,
  Settings,
} from "lucide-react";

export const allNav = [
  {
    role: "admin",
    section: "General",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        to: "/admin/dashboard",
      },
      {
        label: "Category",
        icon: Tags,
        to: "/admin/category",
      },
      {
        label: "Sellers",
        icon: Users,
        to: "/admin/sellers",
      },
      {
        label: "Seller Request",
        icon: UserPlus,
        to: "/admin/seller-request",
      },
    ],
  },

  {
    role: "admin",
    section: "Store",
    items: [
      {
        label: "Products",
        icon: Package,
        to: "/admin/products",
      },
      {
        label: "Orders",
        icon: ShoppingCart,
        to: "/admin/orders",
      },
      {
        label: "Payment Request",
        icon: CreditCard,
        to: "/admin/payment-request",
      },
    ],
  },

  {
    role: "admin",
    section: "Platform",
    items: [
      {
        label: "Live Chat",
        icon: MessageCircle,
        to: "/admin/live-chat",
      },
      {
        label: "Settings",
        icon: Settings,
        to: "/admin/settings",
      },
    ],
  },
];
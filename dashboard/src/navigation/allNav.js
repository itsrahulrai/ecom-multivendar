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
        to: "/admin/dashboard/category",
      },
      {
        label: "Sellers",
        icon: Users,
        to: "/admin/dashboard/sellers",
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
        to: "/admin/dashboard/products",
      },
      {
        label: "Orders",
        icon: ShoppingCart,
        to: "/admin/dashboard/orders",
      },
      {
        label: "Payment Request",
        icon: CreditCard,
        to: "/admin/dashboard/payment-request",
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
        to: "/admin/dashboard/live-chat",
      },
      {
        label: "Settings",
        icon: Settings,
        to: "/admin/dashboard/settings",
      },

      
    ],
  },


//Seller
{
  role: "seller",
  section: "General",
  items: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      to: "/seller/dashboard",
    },

 
     {
      label: "Products",
      icon: Package,
      to: "/seller/dashboard/products",
    },
    {
      label: "Orders",
      icon: Package,
      to: "/seller/dashboard/orders",
    },

    {
      label: "Payments",
      icon: Package,
      to: "/seller/dashboard/payments",
    },

    {
      label: "Chat Customer",
      icon: Package,
      to: "/seller/dashboard/chat-customer",
    },

    {
      label: "Chat Support",
      icon: Package,
      to: "/seller/dashboard/chat-support",
    },
  ],
},

  
  
];
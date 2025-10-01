import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import {
  HomeIcon,
  LayoutListIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SquarePenIcon,
  SquarePlusIcon,
  StoreIcon,
  TicketPercentIcon,
} from "lucide-react";

export const linkSections = [
  {
    title: "PRODUCTS",
    links: [
      { text: "Earphones", path: "/", icon: null },
      { text: "Headphones", path: "/", icon: null },
      { text: "Smartphones", path: "/", icon: null },
      { text: "Laptops", path: "/", icon: null },
    ],
  },
  {
    title: "WEBSITE?",
    links: [
      { text: "Home", path: "/", icon: null },
      { text: "Privacy Policy", path: "/", icon: null },
      { text: "Become Plus Member", path: "/pricing", icon: null },
      { text: "Create Your Store", path: "/create-store", icon: null },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { text: "+1-212-456-7890", path: "/", icon: MailIcon },
      { text: "contact@example.com", path: "/", icon: PhoneIcon },
      { text: "794 Francisco, 94102", path: "/", icon: MapPinIcon },
    ],
  },
];

export const socialIcons = [
  { icon: FacebookIcon, link: "https://www.facebook.com" },
  { icon: InstagramIcon, link: "https://www.instagram.com" },
  { icon: TwitterIcon, link: "https://twitter.com" },
  { icon: LinkedinIcon, link: "https://www.linkedin.com" },
];

export const sidebarLinks = [
  { name: "Dashboard", href: "/store", icon: HomeIcon },
  { name: "Add Product", href: "/store/add-product", icon: SquarePlusIcon },
  {
    name: "Manage Product",
    href: "/store/manage-product",
    icon: SquarePenIcon,
  },
  { name: "Orders", href: "/store/orders", icon: LayoutListIcon },
];

export const adminSidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  { name: "Stores", href: "/admin/stores", icon: StoreIcon },
  { name: "Approve Store", href: "/admin/approve", icon: ShieldCheckIcon },
  { name: "Coupons", href: "/admin/coupons", icon: TicketPercentIcon },
];

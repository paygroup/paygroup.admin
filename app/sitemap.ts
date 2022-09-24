import { BsGraphUp, BsPeople } from "react-icons/bs";
import { FiGrid, FiSettings } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

import type { Sitemap } from "./types";

export const sitemap: Sitemap = [
  { to: "/", title: "Dashboard", icon: FiGrid },
  { to: "/groups", title: "Groups", icon: HiOutlineUserGroup },
  { to: "/payments", title: "Payments", icon: BsGraphUp },
  { to: "/users", title: "Users", icon: BsPeople },
  { to: "/settings", title: "Settings", icon: FiSettings },
];

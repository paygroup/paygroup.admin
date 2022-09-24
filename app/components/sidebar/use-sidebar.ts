// import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
// import { useOutletContext } from "@remix-run/react";

// import type { Sitemap } from "~/types";

// export const useSidebarContext = (props: { sitemap: Sitemap }) => {
//   const { sitemap } = props;
//   const open = useBreakpointValue<boolean | undefined>({
//     base: false,
//     sm: undefined,
//   });
//   const { isOpen, onToggle } = useDisclosure({
//     defaultIsOpen: true,
//     isOpen: open,
//   });
//   return { isOpen, sitemap, onToggle };
// };

// export const useSidebar = () => {
//   const { sidebar } = useOutletContext<{
//     sidebar: ReturnType<typeof useSidebarContext>;
//   }>();
//   return sidebar;
// };
export const dummy = () => "";

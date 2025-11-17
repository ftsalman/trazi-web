import React, { useState } from "react";
import {
  SidebarBodyWrapper,
  SidebarContentWrapper,
  SidebarWrapper,
} from "./SidebarWrappers";
import { SidebarToggleBtn } from "./SidebarToggleBtn";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarNavList } from "./SidebarNavList";
import { SIDEBAR_DATA } from "../../constants/SidebarData";
import { Button } from "../ui/button/Button";
import { IconSupport } from "../../assets/icons/interfaceIcons2";

export const Sidebar = () => {
  const [currMenu, setCurrMenu] = useState(null);
  const { isOpen, isExpanded, onCollapse, onToggle, closeSidebar } =
    useSidebar();

  return (
    <>
      <SidebarWrapper>
        <SidebarToggleBtn />
        <SidebarBodyWrapper hasScrollable={!isExpanded && currMenu}>
          <SidebarContentWrapper>
            <SidebarNavList sidebarData={SIDEBAR_DATA} />
          </SidebarContentWrapper>
        </SidebarBodyWrapper>
        <SidebarContentWrapper>
          <Button
            className={`
              w-full flex items-center rounded-md gap-2
               p-1 bg-white text-white border border-[#FFCB06]
               duration-300
            `}
          >
            <IconSupport size="24" />
            {isExpanded && (
              <span className="whitespace-nowrap">Support Center</span>
            )}
          </Button>
        </SidebarContentWrapper>
      </SidebarWrapper>
    </>
  );
};

import React from "react";
import { Button } from "../../components/ui/button";
import { HeaderContainerByAnima } from "./sections/HeaderContainerByAnima/HeaderContainerByAnima";
import { RequestsInfoByAnima } from "./sections/RequestsInfoByAnima/RequestsInfoByAnima";
import { SidePanelContainerByAnima } from "./sections/SidePanelContainerByAnima";
import { UsersListContainerByAnima } from "./sections/UsersListContainerByAnima";

export const Screen = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { icon: "/icons-5.svg", active: false },
    { icon: "/icons-6.svg", active: false },
    { icon: "/icons-2.svg", active: false },
    { icon: "/icons-3.svg", active: false },
    { icon: "/icons-4.svg", active: true },
    { icon: "/icons-7.svg", active: false },
    { icon: "/icons-8.svg", active: false, highlight: true },
  ];

  // Settings item at the bottom
  const settingsItem = { icon: "/icons-9.svg", active: false };

  return (
    <div
      className="bg-[#09080d] flex flex-row justify-center w-full"
      data-model-id="5367:3713"
    >
      <div className="bg-oldold-primarysakura w-full max-w-[1440px] min-h-[1024px] relative flex flex-col">
        <HeaderContainerByAnima />

        <div className="flex flex-1">
          {/* Navigation sidebar */}
          <div className="flex flex-col w-12 pt-[194px] pl-[120px] pr-4 justify-between h-[810px]">
            <div className="flex flex-col items-start gap-6 w-full">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`relative w-full h-12 p-0 rounded-[32px] ${
                    item.active
                      ? "bg-[#ffffff]"
                      : item.highlight
                        ? "bg-brandgreen"
                        : "bg-oldold-primarycherry"
                  }`}
                >
                  <img
                    className="w-6 h-6 absolute top-3 left-3"
                    alt="Navigation icon"
                    src={item.icon}
                  />
                </Button>
              ))}
            </div>

            <div className="flex flex-col items-start gap-[13px] w-full mb-4">
              <Button
                variant="ghost"
                className="relative w-full h-12 p-0 rounded-[32px] bg-oldold-primarycherry"
              >
                <img
                  className="w-6 h-6 absolute top-3 left-3"
                  alt="Settings icon"
                  src={settingsItem.icon}
                />
              </Button>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            <UsersListContainerByAnima />
            <RequestsInfoByAnima />
          </div>

          {/* Right side panel */}
          <SidePanelContainerByAnima />
        </div>
      </div>
    </div>
  );
};

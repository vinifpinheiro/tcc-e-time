import { useState } from "react";
import { Framer } from "./framer";
import { Tab, useTabs } from "./use-tabs";

type NavigationTabsProps = {
  tabs: Tab[];
  initialTabId: string;
};

export default function NavigationTabs({
  tabs,
  initialTabId,
}: NavigationTabsProps) {
  const [hookProps] = useState({
    tabs,
    initialTabId,
  });

  const framer = useTabs(hookProps);
  return (
    <div className="w-full flex flex-col space-y-24 items-center justify-center">
      <div className="w-full h-full">
        <Framer.Content {...framer.contentProps} className="">
          {framer.selectedTab.children}
        </Framer.Content>
        <Framer.Tabs {...framer.tabProps} />
      </div>
    </div>
  );
}

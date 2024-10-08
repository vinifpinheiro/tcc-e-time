import React, { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import clsx from "clsx";
import { Tab } from "./use-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.15,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<
    Array<HTMLButtonElement | null | undefined>
  >([]);

  const path = usePathname();

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="flex justify-start items-center relative px-6 z-0 py-1 gap-2 border-b border-border mt-6"
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        // const to remove the monitor/ from the path and add the item.href to the path to link to the correct page
        const navigationTarget = path.replace("/monitor/", item.href);

        return (
          <Link href={item.href} key={i}>
            <motion.button
              key={i}
              className={clsx(
                "text-md relative rounded-md -left-1 flex items-center h-8 px-4 z-20 bg-transparent text-sm text-muted-foreground cursor-pointer select-none transition-colors",
                {
                  "!text-foreground":
                    hoveredTabIndex === i || selectedTabIndex === i,
                }
              )}
              ref={(el) => (buttonRefs[i] = el) as any}
              onPointerEnter={() => {
                setHoveredTabIndex(i);
              }}
              onFocus={() => {
                setHoveredTabIndex(i);
              }}
              onClick={() => {
                setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
              }}
            >
              {item.label}
            </motion.button>
          </Link>
        );
      })}
      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={"hover"}
            className="absolute z-10 top-0 left-0 rounded-md bg-accent/50"
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
      {selectedRect && navRect && (
        <motion.div
          className={"absolute z-10 bottom-0 left-0 h-[2px] bg-primary"}
          initial={false}
          animate={{
            width: selectedRect.width * 0.8,
            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )}
    </nav>
  );
};

const Content = ({
  children,
  className,
  selectedTabIndex,
  direction,
}: {
  direction: number;
  selectedTabIndex: number;
  children: ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <AnimatePresence exitBeforeEnter={false} custom={direction}>
      <motion.div
        key={selectedTabIndex}
        variants={{
          enter: (direction) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.8,
          }),
          center: { opacity: 1, x: 0, scale: 1, rotate: 0 },
          exit: (direction) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.8,
            position: "absolute",
          }),
        }}
        transition={{ duration: 0.25 }}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
        custom={direction}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const Framer = { Tabs, Content };

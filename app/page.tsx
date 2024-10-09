"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isVIsible, setisVIsible] = useState(true);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Button onClick={() => setisVIsible(!isVIsible)} variant="default">
        Show/Hide
      </Button>
      <AnimatePresence mode="popLayout">
        {isVIsible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            className="size-24 bg-primary"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

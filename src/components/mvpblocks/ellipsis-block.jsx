"use client";
import { motion } from "framer-motion";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Badge16 from "#components/base-ui/Badge16";
import Badge17 from "#components/base-ui/Badge17";

export default function EllipsisBlock() {
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);
  const handleClick = () => {
    setStatus("copied");
  };
  const icons = {
    idle: <Clipboard strokeWidth={2.5} size={16} />,
    copied: (
      <ClipboardCheck
        strokeWidth={2.5}
        className="stroke-green-500 stroke-2"
        size={16}
      />
    ),
  };
  return (
    <div className="relative rounded-xl">
      <div className="w-full rounded-xl mt-12">
        <div className="flex items-center justify-between rounded-t-xl border-b border-gray-700 bg-neutral-900 px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="size-3 rounded-full bg-[#FF5F56]" />
            <span className="size-3 rounded-full bg-[#FFBD2E]" />
            <span className="size-3 rounded-full bg-[#27C93F]" />
          </div>

          <p className="text-sm font-medium text-gray-400">developer.tsx</p>
          <button
            aria-label="Copy"
            onClick={handleClick}
            className="rounded-xl bg-gray-800 p-2 text-gray-100 hover:bg-gray-700 focus:outline-none">
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}>
              {icons[status]}
            </motion.div>
          </button>
        </div>
        <pre className="overflow-x-auto rounded-b-xl bg-stone-800 text-xs sm:text-sm text-blue-100">
          <div className="px-4">
          <code>

            <div>
              <div className="hidden lg:block md:block absolute right-0 -mt-20 -mr-7">
                <Badge17 />
              </div>
           </div>

            <br />
            <span style={{ color: "#80b6f7" }}>const</span>{" "}
            <span style={{ color: "#ff79c6" }}>developer</span> = {"{"}
            <br />
            <br />


            &nbsp;&nbsp;
            <span style={{ color: "#80b6f7" }}>name :</span>{" "}
            <span style={{ color: "#157555" }}>"Israel Habimana"</span>,
            <br />
            <br />


             &nbsp;&nbsp;
            <span style={{ color: "#80b6f7" }}>role :</span>{" "}
            <span style={{ color: "#157555" }}>"Backend & Frontend Dev"</span>,
            <br />
            <br />

               &nbsp;&nbsp;
            <span style={{ color: "#80b6f7" }}>experience :</span>{" "}
            <span style={{ color: "#ff79c6" }}>4</span>,
            <span style={{ color: "#fff" }}> // Years</span>
            <br />
            <br />
            &nbsp;&nbsp;
            <span style={{ color: "#80b6f7" }}>skills :</span> [
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#157555" }}>"Next,js"</span>,
            <span style={{ color: "#157555" }}>"React"</span>
            <br />
             <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#157555" }}>"Tailwindcss"</span>,
            <span style={{ color: "#157555" }}>"Node.js"</span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#80b6f7" }}>available :</span>{" "}
            <span style={{ color: "#ff79c6" }}>true</span>,
            <br />
            <br />
            {"}"}

            <br />
            <br />

            

            <div>
              <div className="hidden lg:block md:block absolute left-0 mt-4 -ml-6">
                <Badge16 />
              </div>
           </div>

          </code>
          </div>
          

          <div className="flex items-center justify-between border-b border-gray-700 bg-neutral-900 px-4 py-2">
          <div className="flex items-center justify-center gap-2">
            
          </div>

          <p className="text-sm font-medium text-gray-400">UTF-8</p>

          <div className="flex items-center justify-center gap-2">
            <span className="size-3 rounded-full bg-[#27C93F]" />
            <p className="text-sm font-medium text-gray-400">ready</p>
          </div>
        </div>

        </pre>
      </div>
    </div>
  );
}
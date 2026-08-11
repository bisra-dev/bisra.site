
import { MoveRight } from "lucide-react";
const Badge16 = () => {
  return (
    <div className="px-5 py-3 bg-neutral-800 rounded-xl inline-flex items-center font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
        <span className="font-inter font-bold text-lg">🍭</span>
        <span className="font-inter font-bold text-violet-500">Figma</span>
        <MoveRight className="h-4 w-6 font-bold text-blue-600" />
        <span className="font-inter font-bold text-violet-500">Code</span>
    </div>
  );
};

export default Badge16;
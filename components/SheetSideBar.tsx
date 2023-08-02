import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";

const SheetSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="absolute top-6 left-6 md:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[18rem] p-0">
        <SideBar mobile={true} />
      </SheetContent>
    </Sheet>
  );
};

export default SheetSideBar;

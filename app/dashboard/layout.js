import SideNav from "@/app/ui/dashboard/sidenav";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/ui/components/ui/avatar";

import NavActionWrapper from "@/app/ui/nav-actions-wrapper";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-3 md:overflow-y-auto md:p-6">
        <div className="border">
          <div className="flex justify-between h-16 items-center px-4">
            <div className="flex items-center space-x-2">
              <NavActionWrapper />
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

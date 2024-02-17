import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import logout from "@/public/assets/logout.svg";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const Topbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3">
      <Link href="" className="flex items-center gap-4">
        <Image src={logo} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-2">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image 
                    src={logout}
                    alt="logout"
                    width={24}
                    height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
            appearance={{
                baseTheme: dark,
                elements: {
                    organizationSwitcherTrigger:"py-2 px-5"
                }
            }}
        />
      </div>
    </nav>
  );
};

export default Topbar;

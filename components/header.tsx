import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Pen, Settings } from "lucide-react";
import { checkUser } from "@/lib/check-user";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] lg:w-[80%]">
      <nav
        className="
          flex items-center justify-between
          px-6 py-3
          rounded-full
          border border-white/10
          bg-white/10 
          backdrop-blur-md
          shadow-lg
          ring-1 ring-white/20
          transition-all duration-300
          hover:bg-white/15
        "
      >
        {/* === Logo === */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl md:text-2xl font-bold text-white">
            Chingu
          </span>
        </Link>

        {/* === Navigation Buttons === */}
        <div className="flex items-center space-x-3">
          <SignedOut>
            <SignInButton forceRedirectUrl={"/dashboard"}>
              <Button
                variant="outline"
                className="
                  rounded-full 
                  bg-white/10 
                  hover:bg-white/20 
                  border-white/20 
                  text-white
                  transition-all
                "
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link href={"/dashboard"}>
              <Button
                variant="outline"
                className="
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  border-white/20
                  text-white
                  flex items-center gap-2
                "
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Button>
            </Link>

            <Link href={"/transaction/create"}>
              <Button
                className="
                  rounded-full 
                  bg-gradient-to-r from-orange-400 to-pink-400 
                  hover:from-orange-500 hover:to-pink-500
                  text-white
                  flex items-center gap-2
                  shadow-md hover:shadow-lg transition-all
                "
              >
                <Pen className="w-4 h-4" />
                <span>Add Transaction</span>
              </Button>
            </Link>

            <Link href={"/settings"}>
              <Button
                variant="outline"
                className="
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  border-white/20
                  text-white
                  flex items-center gap-2
                "
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-white/20 shadow-md",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

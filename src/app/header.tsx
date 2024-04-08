import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";



const Header = () => {

  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="container mx-auto justify-between flex items-center">
        <Link href={"/"} className="flex items-center gap-2 text-xl">
          <div className="rounded-full overflow-hidden">
            <Image
              src={"/logo.png"}
              width="50"
              height="50"
              alt="file drive logo"
            />
          </div>
          File Drive
        </Link>
        <SignedIn>

        <Button variant={"outline"}>
          <Link href={"/dashboard/files"}>Your Files</Link>
        </Button>
        </SignedIn>

        <div className="flex gap-2 items-center">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;

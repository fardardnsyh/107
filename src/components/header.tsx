import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}

const Header = async () => {
  const session = await auth();

  return (
    <header className="border-b">
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1 className="text-lg md:text-xl font-medium">Formify</h1>

          <div>
            {session?.user ? (
              <div className="flex items-center gap-x-4">
                <div>
                  {session?.user?.name && session?.user?.image && (
                    <Image
                      src={session?.user?.image}
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                </div>
                <SignOut />
              </div>
            ) : (
              <Link href="/api/auth/signin">
                <Button>Sign in</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

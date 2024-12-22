import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";

const Navbar = async () => {
  const session = await auth();
  //Guardamos en una constante la sesion de auth

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} priority />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            //Si la sesion existe y ya esta identificado el usuario, mostramos lo siguiente.
            <>
              <span className="max-sm:hidden">Create</span>
              <BadgePlus className="size-6 sm:hidden" />
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden font-semibold">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
            </>
          ) : (
            //Si la sesion no existe y no esta identificado el usuario, mostramos lo siguiente.
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
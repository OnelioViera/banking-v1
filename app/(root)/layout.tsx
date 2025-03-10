import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import Image from 'next/image';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src='/icons/logo.svg'
            alt="Logo"
            width={30}
            height={30} />
          <div>
            <MobileNav user={loggedIn} /> 
          </div>
        </div>
      {children}

      </div>

    </main>
  );
}
import Logout from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  

  return(
    <>
    <h1>Hey {session?.user?.name}</h1>
    <Logout session={session} />
    </>
  )
}

import Logout from "@/components/LogoutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions)
  

  return(
    <>
    <h1>Hey {session?.user?.name}</h1>
    <Logout />
    </>
  )
}

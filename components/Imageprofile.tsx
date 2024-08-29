import { getUserFromDatabase } from "@/service/userService";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default  async function Imageprofile() {
    const {userId} = auth()
    const user = await currentUser()
        console.log(user);

    const data= await getUserFromDatabase(userId as string);

  return (
    <div>
      <Image className="rounded-full" src={data?.image as string} alt="clerk logo" width={100} height={100} />
    </div>
  )
}

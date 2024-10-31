import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addUserToDatabase, getUserFromDatabase } from "@/service/userService";




export default  async function PageSetting() {
  const {userId} = auth()
  
  const data= await getUserFromDatabase(userId as string);
  
  return (
    <div className="mx-auto" >
          <h1 className=" flex justify-center text-3xl font-semibold">Réglages</h1>
        <div className="pt-8 flex justify-center items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] py-10">
      
    <section className="border border-gray-200 rounded-md p-3 flex flex-col justify-center items-center">

      <p className="text-lg text-muted-foreground">Vos parametres de profil</p>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>

        <Card className="flex flex-col justify-center items-center">

          <CardHeader >
            <CardTitle>Parametres globals</CardTitle>
          </CardHeader>

          <CardContent  className="flex flex-col justify-center items-center">
          
              <Image 
                src={data?.image as string} alt="clerk logo"  
                
                className="w-16 h-16 object-contain mb-4 rounded-full" 
                width={100}
                height={100}
              />
            
       
            <div className="space-y-1">
             <p> {data?.name}</p>
            </div>
            <div className="space-y-1 mt-2">
            <p> {data?.email}</p>

            </div>
          </CardContent>

          <CardFooter>
            <Button>Connecté</Button>
          </CardFooter>
        </Card>

      {/*}
      <form action={deleteUser}>
      <input type="hidden" name="id" value={user?.id}/>
        <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">Supprimer mon compte</Button>
      </form>
*/}
    </section>

            
        </div>
    </div>
  )

  }
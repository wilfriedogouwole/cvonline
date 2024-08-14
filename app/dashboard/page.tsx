import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Pagedashboard() {
/* recuperer le userid*/

const {userId} = auth()
if (!userId) {
redirect("/")
}

const {sessionId} = auth()
if (!sessionId) {
return null
}

console.log(sessionId);

console.log(userId);

const user = await currentUser()
console.log(user);

 
      return (
        <div className="my-5" >
          <div className="flex flex-col items-center justify-center my-5  ">
      <Image className="rounded-full" src={user?.imageUrl as string} alt="clerk logo" width={100} height={100} />

<h1> Bienvenue {user?.firstName} {user?.lastName}</h1>
<p> Email: {user?.emailAddresses[0].emailAddress}</p>
<p>Session : {sessionId}</p>



</div>

            <div className="mx-auto grid w-full max-w-6xl gap-2">
            </div>
            <div className="mx-auto flex w-full justify-center items-center  gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
             
              <div className="grid gap-6">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle className="text-center">Suppression du compte</CardTitle>
                    <CardDescription className="text-center">
                    Souhaitez vous supprimer vraiment votre compte ?                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  
                  </CardContent>
                  <CardFooter className=" flex justify-center item center border-t px-6 py-4">
                    <Button className="  red-button bg-red-700" >Supprimer mon compte</Button>
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardTitle className="text-center">Ajout de notes</CardTitle>
                    <CardDescription className="text-center">
                    Souhaitez vous commenecer à ajouter des notes ?                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  
                  </CardContent>
                  <CardFooter className=" flex justify-center item center border-t px-6 py-4">
                   <Link href="/dashboard/notes"> <Button className="  red-button bg-red-700" >Ajouter des notes </Button>
                   </Link> </CardFooter>
                </Card>
              </div>
            </div>
        </div>
      )
    }
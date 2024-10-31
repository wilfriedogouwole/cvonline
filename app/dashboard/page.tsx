import DeleteButton2 from "@/components/DeleteButton2";
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
import { addUserToDatabase, getUserFromDatabase } from "@/service/userService";
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
  redirect("/")

}

console.log(sessionId);

console.log(userId);

const user = await currentUser()
console.log(user);


if(userId &&user){
  const fullName = `${user.firstName}` || "";
  const email = user.emailAddresses[0].emailAddress || "";
  const image= user.imageUrl || "";

  await addUserToDatabase(userId, fullName, email, image);

}

const data= await getUserFromDatabase(userId);



{/* const del= await deleteUserFromDatabase(userId);*/}

return (
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="flex flex-col items-center justify-center my-5">
      {/* Affichage de l'image et des informations de l'utilisateur */}
      <Image className="rounded-full" src={data?.image as string} alt="clerk logo" width={100} height={100} />
      <h1>Bienvenue {data?.name}</h1>
      {/*<p> Email: {data?.email}</p>*/}
    </div>
    <div className="container mx-auto p-4">
      {/* First Section: Two Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Créer votre CV</CardTitle>
            <CardDescription className="text-center">Créer un nouveau CV</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="/dashboard/editvc">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Editer mon CV
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Ajout de notes</CardTitle>
            <CardDescription className="text-center">Souhaitez-vous commencer à ajouter des notes ?</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="/dashboard/notes">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Ajouter des notes
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Second Section: Account Deletion Card */}
      <div className="grid grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Suppression du compte</CardTitle>
            <CardDescription className="text-center">
              Souhaitez-vous vraiment supprimer votre compte ?
            </CardDescription>
            <div className="space-y-1 mb-2">
              <Input 
                className="text-center" 
                disabled 
                name="idUser" 
                type="text" 
                id="idUser" 
                placeholder="Votre e-mail" 
                defaultValue={data?.email} 
              />
            </div>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <DeleteButton2 userId={userId} />
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
)

    }
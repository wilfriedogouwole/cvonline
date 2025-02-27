import DeleteButton from "@/app/components/DeleteButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAllNotes } from "@/lib/actionsNotes";
import { getUserFromDatabase } from "@/service/userService";
import { auth } from "@clerk/nextjs/server";
import { File, FilePenLine } from 'lucide-react';
import Link from "next/link";


export default async function DashboardPage() {
  const {userId} = auth()
  const user = await getUserFromDatabase(userId as string);
  const data = await getAllNotes(user?.clerkUserId as string)
  
  console.log(user);
  console.log(data);


  return (
    <section className="grid items-start gap-y-8">
        <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2 bg-white ">
          <div className="grid gap-1">
            <h2 className="text-3xl uppercase font-black text-black">Notes</h2>
            <p className="text-lg text-muted-foreground text-black">Ne perdez pas vos idées et créer une note</p>
            <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>
          </div>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/dashboard/notes/create">Créer une note</Link>
        </Button>
        </div>
        {data.length < 1 ?(
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-3 animate-in fade-in-50">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-500 bg-opacity-20 mb-4">
            <File className="text-orange-900"/>
            </div>
            <p className="text-lg text-white">{`Vous n'avez aucune note`}</p>
            <p className="text-muted-foreground text-sm">Commencez des maintenant à créer des notes via notre application</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
              <Link href="/dashboard/notes/create">Créer une nouvelle note</Link>
            </Button>
          </div>
        ): (
          <div className="flex flex-col space-y-4">
            {data?.map((item,index) => (
            <Card key={index} className="flex justify-between items-center p-4">
              <div>
                <h2  className="text-orange-500 text-xl font-bold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">
                  écrit le {new Intl.DateTimeFormat("fr-FR", {
                    dateStyle: "full"
                  }).format(new Date(item.createdAt))}
                </p>
                </div>  
               <div className=" flex items-center gap-3 ">
               <Button type="button" className="bg-yellow-500 hover:bg-yellow-600 mt-4 text-white mb-3">
                  <Link href={`notes/note/${item.id}`}><FilePenLine className='w-4 h-4' /></Link>
                  </Button> 
                  <DeleteButton id={item.id}/>   
              </div>
              
            </Card>
          ))}
          </div>
        )}
    </section>
  );
}
"use client";
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



export default  function PageSetting() {
  
  return (
    <div className="mx-auto" >
          <h1 className=" flex justify-center text-3xl font-semibold">Réglages</h1>
        <div className="pt-8 flex justify-center items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      
    <section className="border border-gray-200 rounded-md p-3">

      <p className="text-lg text-muted-foreground">Vos parametres de profil</p>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>

      <form action="">
        <input type="hidden" name="id" value="" />

        <Card>

          <CardHeader>
            <CardTitle>Parametres globals</CardTitle>
            <CardDescription>Modifier vos informations puis sauvegarder.</CardDescription>
          </CardHeader>

          <CardContent>
          
              <Image 
                src={""} 
                alt=""
                className="w-16 h-16 object-contain mb-4" 
                width={100}
                height={100}
              />
            
            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input disabled name="idUser" type="text" id="idUser" placeholder="Votre e-mail" defaultValue="" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Nom</Label>
              <Input name="name" type="text" id="name" placeholder="Votre nom" defaultValue="" />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input disabled name="email" type="email" id="email" placeholder="Votre e-mail" defaultValue="" />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit">Modifier</Button>
          </CardFooter>
        </Card>

      </form>
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
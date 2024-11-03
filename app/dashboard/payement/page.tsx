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
export default function PagePayement(){
  return (
    <div className="mx-auto pb-10" >
          <h1 className=" flex justify-center text-3xl font-semibold">Paiement</h1>
        <div className="pt-8 flex justify-center items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
         
          <div className="flex flex-col gap-6 text-center  justify-center items-center">
            <Card x-chunk="  dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Offre actuelle</CardTitle>
                <CardDescription>
                  Montant de votre offre actuelle
                </CardDescription>
              </CardHeader>
              <CardContent>
             <p className="text-center">16euros</p>
              </CardContent>
              <CardFooter className="justify-center border-t px-6 py-4">
                <Button>Changer d&#39;offre</Button>
              </CardFooter>
            </Card>

            </div>
           
            
          </div>
        </div>
  )

  }
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



export default  function Pagemodel() {


return (
  <div className="container mx-auto px-4 max-w-5xl">
    <h1 className="text-center text-4xl font-bold text-red-950 bg-white">Choisissez votre modèle</h1>
    <div className="container mx-auto p-4">
      {/* First Section: Two Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <Image src="/images/cv5.jpg" alt="clerk logo" width={866} height={866} />
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="#">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Editer
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <Image src="/images/cv2.jpg" alt="clerk logo" width={866} height={866} />
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="#">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Editer
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Image src="/images/cv3.jpg" alt="clerk logo" width={866} height={866} />
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="#">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Editer
              </Button>
            </Link>
          </CardFooter>
        </Card>

      </div>

      {/* Second Section: Account Deletion Card */}
      <div className="grid grid-cols-1">
      <Card>
          <CardHeader>
            <Image src="/images/cv1.jpg" alt="clerk logo" width={866} height={866} />
            <CardDescription className="text-center text-2xl text-white">Le plus utilisé</CardDescription>

          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-center items-center border-t px-6 py-4">
            <Link href="#">
              <Button className="red-button bg-red-600 hover:bg-red-700 text-white">
                Editer
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
)

    }
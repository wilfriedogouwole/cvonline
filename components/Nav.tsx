'use server'
import "@/styles/styleheader.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import "../styles/styleheader.css";
import { DarkModenav } from "./DarkModenav";
import { Button } from "./ui/button";



export default  async function  Nav () {

  const menuItems = [
    "Exemple de CV",
    "Exemple lettre de motivation",
    "Conseils",
    "Nous contacter",
    "Connexion",
    
  ];

const user = await currentUser()
 if(!user){

  return (
    <Navbar className=" flex items-center text-center justify-center" position="sticky" disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Link href="http://localhost:3000/">
        <Image src="/images/logo_blanc.png" alt="Logo" width={150} height={150} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard/editvc">
          Editer votre CV
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/dashboard/lettre" aria-current="page" color="warning">
          Lettre de motivation
          </Link>
        </NavbarItem>
        <NavbarBrand>
        <Link href="/">
        <Image src="/images/logo_blanc.png" alt="Logo" width={150} height={150} />
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link color="foreground" href="#">
          Conseils
          </Link>
        </NavbarItem>
      </NavbarContent>
      

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Nous contacter</Link>
        </NavbarItem>
        <NavbarItem>
            <SignedOut>
            <Button className="bg-red-950 hover:bg-orange-600 text-white" >
              <SignInButton/>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </NavbarItem>
        <NavbarItem>
       
<DarkModenav/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

else { 
  return (
    <Navbar className=" flex items-center text-center justify-center" position="static" disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Link href="http://localhost:3000/">
        <Image src="/images/logo_blanc.png" alt="Logo" width={150} height={150} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard/editvc">
          Editer votre CV
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/dashboard/lettre" aria-current="page" color="warning">
          Lettre de motivation
          </Link>
        </NavbarItem>
        <NavbarBrand>
        <Link href="/">
        <Image src="/images/logo_blanc.png" alt="Logo" width={150} height={150} />
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link color="foreground" href="#">
          Conseils
          </Link>
        </NavbarItem>
      </NavbarContent>
      

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Nous contacter</Link>
        </NavbarItem>
        <NavbarItem>
            <SignedOut>
            <Button className="bg-red-950 hover:bg-orange-600 text-white" >
              <SignInButton/>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </NavbarItem>
        <NavbarItem>
       
<DarkModenav/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}


}












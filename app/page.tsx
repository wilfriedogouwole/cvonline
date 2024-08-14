import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
const { userId } = auth();
if(userId){
  redirect("/dashboard")
}

  return (
   <section className="flex flex-col items-center justify-center h-screen">
  
<h1 className=" text-8xl uppercase font-black">LOGIN</h1>
<Link href="/sign-in">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-5 rounded"> Connexion</button>
</Link>
<Link href="/sign-up">

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"> Inscription </button>
</Link>
   
   </section>
  );
}
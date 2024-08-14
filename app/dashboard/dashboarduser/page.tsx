"use client";
import { useUser } from "@clerk/nextjs";


export default function Pagedashboarduser() {
const {isLoaded, isSingnin,user}=  useUser();

if(!isLoaded || !isSingnin){
  return null;
}

return (
    <div className="flex flex-col items-center justify-center my-5 h-screen">
<h1> Dashuser</h1>
<p> Bienvenue {user?.firstName} {user?.lastName}
</p>


</div>
  )
}
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async () => {

    const user = await currentUser();
    
    console.log(user);


    // Vérifiez si l'utilisateur est authentifié
    
    if (!user) {
return null;
    }

    // Vérifiez si l'utilisateur est dans la base de données
    
  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });


// Si l'utilisateur est dans la base de données, le retourner

if (loggedInUser) {
    return loggedInUser;
}

  // Si l'utilisateur est dans la base de données, le creer

  const newUser = await prisma.user.create({

    data: {
        
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
    },
  });   

  return newUser;


    }
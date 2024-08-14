import { prisma } from "@/lib/db";


export const addUserToDatabase = async (clerkUserId: string, name: string,
     email: string, image:string) => {

    try {
        
        const user = await prisma.user.upsert({
            where: {
                clerkUserId: clerkUserId,
            },
            create: {
                name: name,
                email: email,
                image: image,
                clerkUserId: clerkUserId,
            },
            update: {
                name: name,
                email: email,
                image: image,
                clerkUserId: clerkUserId,
            },
          });


    } catch (error) {
        console.log('une erreur est survenue lors de la création de l\'untilisateur', error)
        throw error;
    } 
    
    }

    export const getUserFromDatabase = async (clerkUserId: string) => {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    clerkUserId: clerkUserId,
                },
              });
              return user;
        } catch (error) {
            console.log('une erreur est survenue lors de la récupération de l\'utilisateur dans la base de données', error)
            throw error;
        } 
      }
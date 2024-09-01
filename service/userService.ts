'use server'
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const addUserToDatabase = async (clerkUserId: string, name: string, email: string, image:string) => {


    try {

        const user = await prisma.user.upsert({
            
            where: {clerkUserId},

            update: {
                name: name,
                email: email,
                image: image,
                clerkUserId,
            },
            create: {
                name: name,
                email: email,
                image: image,
                clerkUserId,
            },
           
          });

          console.log("User created successfully:", user);

        return user;

    } catch (error) {
        console.log('une erreur est survenue lors de la création de l\'untilisateur', error)
        throw error;
    } 
    
    }

    export const getUserFromDatabase = async (clerkUserId: string) => {

      console.log("Clerk User ID:", clerkUserId);
      
        try {
            
            const user = await prisma.user.findUnique({
                where: {
                    clerkUserId
                },
              });
              return user;

        } catch (error) {
            console.log('une erreur est survenue lors de la récupération de l\'utilisateur dans la base de données', error)
            throw error;
        } 
      }

      export const deleteUserFromDatabase = async (clerkUserId: string) => {

        console.log("Clerk User ID:", clerkUserId);
  
        try {
          const result = await prisma.$transaction(async (prisma) => {
            // Supprimez d'abord les notes de l'utilisateur
            await prisma.notes.deleteMany({
              where: { userId: clerkUserId }
            });
      
            // Ensuite, supprimez l'utilisateur
            
            const deletedUser = await prisma.user.delete({
              where: {clerkUserId

               }
            });
      revalidatePath('/');
          });
      
          console.log("User and related data deleted successfully:", result);
          return result;
        } catch (error) {
          console.error('Une erreur est survenue lors de la suppression de l\'utilisateur et de ses données associées', error);
          throw error;
        }
      }
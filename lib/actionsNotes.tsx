"use server"
import { prisma } from "@/lib/db";
import { getUserFromDatabase } from "@/service/userService";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllNotes = async (userId: string) =>{
    const data = await prisma.notes.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    return data
  }
  
  
  export const createNote = async (formData:FormData)=> {

    const {userId} = auth()
    if (!userId) {
      throw new Error("Utilisateur non authentifié.");
    }  

    const user = await getUserFromDatabase(userId as string);
    if (!user) {
      throw new Error("Utilisateur non trouvé dans la base de données.");
    }

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const completed = formData.get("completed")
  
console.log("Données du formulaire :", { title, description, completed });
console.log("ID de l'utilisateur :", userId);

try {
  console.log("Tentative de création de note avec les données :", {
    userId: user.clerkUserId,
    title,
    description,
    completed: completed === "on"
  });
  await prisma.notes.create({
    data: {
      userId: user.clerkUserId as string,
      title: title,
      description: description,
      completed: completed === "on",
    }
  });
  console.log("Note créée avec succès");
  return redirect('/dashboard/notes');
} catch (error) {
  console.error("Erreur lors de la création de la note :", error);
  if (error instanceof Error) {
    throw error;
  } else {
    throw new Error("Une erreur inattendue s'est produite lors de la création de la note.");
  }

  }
}
  
  export const deleteNote = async(formData:FormData)=> {
    const id = formData.get('id') as string;
    await prisma.notes.delete({
      where: {id}
    });
    revalidatePath('/')
  }
  
  export const getNote = async(id:string)=> {
  
    const note = prisma.notes.findUnique({
      where: {id: id}
    })
    return note;
  }
  
  export const updateNote = async (formData: FormData) => {
    try {
      const id = formData.get('id') as string;
      const title = formData.get("title") as string
      const description = formData.get("description") as string
      const completed = formData.get("completed")
  
      if (title !== null || description !== null) {
        await prisma.notes.update({
          where: { id },
          data: { title: title, description: description, completed: completed === "on" },
        });
      }
      return redirect('/');
    } catch (error) {
      console.error('Error updating note:', error);
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error("Une erreur inattendue s'est produite lors de la mise à jour de la note.");
      }
    }
  };
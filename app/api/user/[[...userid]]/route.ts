import { prisma } from "@/lib/db";
import { clerkClient, getAuth } from '@clerk/nextjs/server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Vérification que la méthode est bien DELETE
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  // Récupération de l'ID utilisateur depuis la requête
  const { userId } = req.query;
  if (typeof userId !== 'string') {
    return res.status(400).json({ message: 'ID utilisateur invalide' });
  }

  // Récupération de l'utilisateur authentifié via Clerk
  const { userId: requestUserId } = getAuth(req);

  // Vérification que l'utilisateur est authentifié
  if (!requestUserId) {
    return res.status(401).json({ message: 'Non authentifié' });
  }

  // Vérification que l'utilisateur essaie de supprimer son propre compte
  if (requestUserId !== userId) {
    return res.status(403).json({ message: 'Non autorisé' });
  }

  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    // Si l'utilisateur n'existe pas, renvoyer une erreur 404
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Suppression de l'utilisateur de Clerk
    await clerkClient.users.deleteUser(userId);

    // Suppression de l'utilisateur de la base de données avec Prisma
    await prisma.user.delete({
      where: {
        clerkUserId: userId,
      },
    });

    // Réponse de succès si tout a bien fonctionné
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    // Gestion des erreurs lors de la suppression
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
  }
}

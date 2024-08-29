'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface DeleteAccountButtonProps {
  userId: string;
}

export default function DeleteAccountButton({ userId }: DeleteAccountButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du compte');
      }

      // Compte supprimé avec succès
      alert("Votre compte a été supprimé avec succès.");
      // Rediriger vers la page d'accueil ou de déconnexion
      router.push('/');
    } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur est survenue lors de la suppression du compte. Veuillez réessayer.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      onClick={handleDelete} 
      className="red-button bg-red-700 hover:bg-red-800 text-white"
      disabled={isDeleting}
    >
      {isDeleting ? 'Suppression en cours...' : 'Supprimer mon compte'}
    </Button>
  );
}
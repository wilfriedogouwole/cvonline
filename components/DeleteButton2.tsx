"use client";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function DeleteButton2({ userId }: { userId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { signOut } = useClerk()

  const handleDelete = async () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      setIsDeleting(true);
      try {
        const response = await fetch('/api/deleteUser', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        const result = await response.json();
        if (result.success) {
          toast.success ('Compte supprimé avec succès');
        } else {
          throw new Error(result.message || 'Failed to delete user');
        }
      } catch (error) {
        console.error("Erreur lors de la suppression du compte :", error);
        alert("Une erreur est survenue lors de la suppression du compte. Veuillez réessayer.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleClick = async () => {
    await handleDelete();
    toast.success ('Compte supprimé avec succès');

    signOut();

  };
  



  return (
    <Button
      onClick={handleClick}
      disabled={isDeleting}
      className="bg-red-600 hover:bg-red-700 text-white"
    >
      {isDeleting ? "Suppression en cours..." : "Supprimer le compte"}
    </Button>
  );
}
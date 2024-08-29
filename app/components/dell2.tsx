
const UserList = ({ users }) => {

  // Fonction pour supprimer un utilisateur
  const handleDelete = async (userId) => {
    if (window.confirm("Es-tu sûr de vouloir supprimer cet utilisateur ?")) {
      try {
        const response = await fetch(`/api/user/${userId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert("Utilisateur supprimé avec succès !");
          // Ici, tu peux rafraîchir la liste des utilisateurs ou retirer l'utilisateur localement de l'état
        } else {
          alert("Une erreur s'est produite lors de la suppression.");
        }
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
        alert("Une erreur s'est produite lors de la suppression.");
      }
    }
  };

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => handleDelete(user.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;

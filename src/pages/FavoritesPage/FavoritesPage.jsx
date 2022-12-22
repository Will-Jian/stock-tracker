
import { useEffect, useState } from "react";
import * as usersApi from "../../utilities/users-api"


export default function FavoritesPage({ user, setUser }) {
  const [userFav, setUserFav] = useState(null)

  useEffect(() => {
    async function updateUser() {
      const updatedUser = await usersApi.updateUser()
      setUserFav(updatedUser)
      setUser(updatedUser)
    }

    updateUser()
  }, [])

  if (!userFav) return null
  return (
    <div>
    <h1>Favorites</h1>
    <p> {userFav.favorite[0].ticker}</p>
    </div>
  );
}
import { useEffect, useState } from 'react'
import axios from 'axios'

export interface IUser {
  name: string
  username: string
  id: number
}

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const api = 'https://jsonplaceholder.typicode.com/users/'
  useEffect(() => {
    axios
      .get(api)
      .then((response) => response.data)
      .then((json) => setUsers(json))
  }, [])

  const addUser = async (id: number, name: string, username: string) => {
    const post = { id: id, name: name, username: username }
    await axios.post(api, post)
    setUsers([...users, post])
  }

  const deleteUser = async (id: number) => {
    await axios.delete(api + id)
    setUsers(users.filter((user) => user.id !== id))
  }

  return {
    users,
    addUser,
    deleteUser,
  }
}

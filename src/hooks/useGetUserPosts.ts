import { useEffect, useState } from 'react'
import axios from 'axios'

interface IUserPosts {
  title: string
  id: number
  body: string
}

export const useUserPosts = (id: number) => {
  const [userPosts, setUserPosts] = useState<IUserPosts[]>([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts?_limit=5`)
      .then((response) => response.data)
      .then((json) => setUserPosts(json))
  }, [])

  return {
    userPosts,
  }
}

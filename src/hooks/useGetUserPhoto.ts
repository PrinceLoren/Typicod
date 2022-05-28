import { useEffect, useState } from 'react'
import axios from 'axios'

interface IUserPhoto {
  thumbnailUrl: string
}

export const useUserPhoto = (id: number) => {
  const [userPhoto, setUserPhoto] = useState<IUserPhoto>({ thumbnailUrl: '' })

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.data)
      .then((json) => setUserPhoto(json))
  }, [])

  const photoUrl = userPhoto.thumbnailUrl

  return {
    photoUrl,
  }
}

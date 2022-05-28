import { FC } from 'react'
import { InfoText, UserPhoto } from '@/components/User/styled'
import { useUserPhoto } from '@/hooks/useGetUserPhoto'
import Image from 'next/image'
import { ModalWindow } from '@/components/Modal'

interface IUserModal {
  name: string
  username: string
  id: number
  isOpen: boolean
  onClose: VoidFunction
}

export const UserModal: FC<IUserModal> = ({
  onClose,
  isOpen,
  name,
  username,
  id,
}) => {
  const { photoUrl } = useUserPhoto(id)

  return (
    <ModalWindow isOpen={isOpen} onClose={onClose}>
      <h1>{id}</h1>
      <UserPhoto>
        <Image
          src={photoUrl}
          width="5rem"
          height="5rem"
          unoptimized
          alt={name}
          layout="responsive"
        />
      </UserPhoto>
      <InfoText label>Name</InfoText>
      <InfoText>{name ? name : 'No name'}</InfoText>
      <InfoText label>UserName</InfoText>
      <InfoText>{username ? username : 'No username'}</InfoText>
    </ModalWindow>
  )
}

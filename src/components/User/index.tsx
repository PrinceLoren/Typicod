import { FC, useState } from 'react'
import {
  ButtonWrapper,
  InfoText,
  UserContent,
  UserPhoto,
} from '@/components/User/styled'
import { useUserPhoto } from '@/hooks/useGetUserPhoto'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { UserModal } from '@/components/User/components/UserModal'

interface IUser {
  name: string
  username: string
  id: number
  onDelete: (id: number) => void
}

export const User: FC<IUser> = ({ onDelete, name, username, id }) => {
  const { photoUrl } = useUserPhoto(id)
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(!showModal)
  }

  if (id && photoUrl) {
    return (
      <UserContent>
        <h1>{id}</h1>
        <UserModal
          isOpen={showModal}
          onClose={toggleModal}
          name={name}
          username={username}
          id={id}
        />
        <UserPhoto>
          <Image
            src={photoUrl}
            width="5rem"
            height="5rem"
            unoptimized
            layout="responsive"
          />
        </UserPhoto>
        <InfoText label>Name</InfoText>
        <InfoText>{name ? name : 'No name'}</InfoText>
        <InfoText label>UserName</InfoText>
        <InfoText>{username ? username : 'No username'}</InfoText>
        <ButtonWrapper>
          {id <= 10 ? (
            <Button href={`/${id}`} label="To User" />
          ) : (
            <Button label="Open" onClick={toggleModal} />
          )}
          <Button
            ml="2rem"
            secondary
            onClick={() => onDelete(id)}
            label="Delete user"
          />
        </ButtonWrapper>
      </UserContent>
    )
  }

  return <div />
}

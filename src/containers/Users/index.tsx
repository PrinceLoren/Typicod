import { FC, useState } from 'react'
import { ButtonWrapper, MainContent } from '@/containers/Users/styled'
import { User } from '@/components/User'
import { Button } from '@/components/Button'
import { useUser } from '@/hooks/useUser'
import { ModalWindow } from '@/components/Modal'
import { FormAddUser } from '@/components/Form'

export const Users: FC = () => {
  const { users, addUser, deleteUser } = useUser()
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <ButtonWrapper>
        <Button secondary label="Add New User" onClick={openModal} />
      </ButtonWrapper>
      <ModalWindow isOpen={showModal} onClose={openModal}>
        <FormAddUser
          users={users}
          onAfterSubmit={openModal}
          onSubmit={addUser}
        />
      </ModalWindow>
      <MainContent>
        {users?.map((user) => (
          <User onDelete={deleteUser} key={user.id} {...user} />
        ))}
      </MainContent>
    </div>
  )
}

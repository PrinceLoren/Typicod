import { FC } from 'react'
import { Button } from '@/components/Button'
import { IUser } from '@/hooks/useUser'
import { Formik, Form } from 'formik'
import { StyledInput, StyledLabel } from '@/components/Form/styled'
import { initialValues } from '@/components/Form/data'

interface IFormAddUser {
  users: IUser[]
  onSubmit: (id: number, name: string, username: string) => void
  onAfterSubmit: VoidFunction
}

export const FormAddUser: FC<IFormAddUser> = ({
  users,
  onSubmit,
  onAfterSubmit,
}) => {
  return (
    <Formik
      validateOnBlur
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(users.length + 1, values.name, values.username)
        onAfterSubmit()
        actions.setSubmitting(false)
      }}
    >
      <Form>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput id="name" name="name" placeholder="Enter your Name" />
        <StyledLabel htmlFor="username">Username</StyledLabel>
        <StyledInput
          id="username"
          name="username"
          placeholder="Enter your Username"
        />
        <Button mt="2rem" type="submit" label="Submit" />
      </Form>
    </Formik>
  )
}

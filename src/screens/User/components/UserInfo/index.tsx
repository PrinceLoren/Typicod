import { FC } from 'react'
import {
  InfoText,
  MainContent,
} from '@/screens/User/components/UserInfo/styled'

interface IUser {
  name: string
  username: string
  companyName: string
  catchPhrase: string
}

export const UserInfo: FC<IUser> = ({
  name,
  username,
  companyName,
  catchPhrase,
}) => {
  return (
    <MainContent>
      <InfoText>Name - {name}</InfoText>
      <InfoText>UserName - {username}</InfoText>
      <InfoText>Company Name - {companyName}</InfoText>
      <InfoText>Catch Phrase - {catchPhrase}</InfoText>
    </MainContent>
  )
}

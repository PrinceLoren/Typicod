import { FC } from 'react'
import { useUserPosts } from '@/hooks/useGetUserPosts'
import { useUserPhoto } from '@/hooks/useGetUserPhoto'
import Image from 'next/image'
import {
  Back,
  MainContent,
  UserContent,
  UserPhoto,
} from '@/screens/User/styled'
import { UserInfo } from './components/UserInfo'
import { Button } from '@/components/Button'
import { UserPostsGroup } from '@/screens/User/components/UserPosts'

interface IUserCompany {
  name: string
  catchPhrase: string
}

interface IUserData {
  id: number
  name: string
  username: string
  company: IUserCompany
}

interface IUser {
  users: IUserData
}

export const User: FC<IUser> = ({ users }) => {
  const { userPosts } = useUserPosts(users.id)
  const { photoUrl } = useUserPhoto(users.id)

  if (photoUrl) {
    return (
      <MainContent>
        <Back>
          <Button label="Back" href="/" />
        </Back>
        <UserContent>
          <UserPhoto>
            <Image
              src={photoUrl}
              width="5rem"
              height="5rem"
              unoptimized
              layout="responsive"
              alt={users.name}
            />
          </UserPhoto>
          <UserInfo
            companyName={users.company.name}
            catchPhrase={users.company.catchPhrase}
            {...users}
          />
          <UserPostsGroup userPosts={userPosts} />
        </UserContent>
      </MainContent>
    )
  }

  return <div />
}

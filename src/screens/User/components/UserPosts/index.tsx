import { FC } from 'react'
import { MainContent, PostContent, PostText, PostTitle } from './styled'

interface IPost {
  title: string
  id: number
  body: string
}

interface IUserPosts {
  userPosts: IPost[]
}

export const UserPostsGroup: FC<IUserPosts> = ({ userPosts }) => {
  return (
    <MainContent>
      {userPosts?.map((post) => (
        <PostContent key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.body}</PostText>
        </PostContent>
      ))}
    </MainContent>
  )
}

import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { User } from '@/screens/User'

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { id } = ctx.params
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const data = result.data

  return {
    props: {
      users: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  const data = result.data

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default User

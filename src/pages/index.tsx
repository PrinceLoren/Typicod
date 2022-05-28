import { GetStaticProps } from 'next'
import { Users } from '@/containers/Users'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Users

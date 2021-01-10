import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Post from './Post'
import styled from 'styled-components'
import { IPost } from '../interfaces/IPost'
// import * as GetAllPosts from './graphql/GetAllPosts.graphql'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 3% 3%;
`

const PostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 800px;
`

const PostWrapper = styled.li`
  background: #fff;
  margin: 30px 0;
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: 0px 3px 5px 1px #000;
  word-break: break-word;
`

const App: React.FC = () => {
  const typeDefs = gql`
    query Query {
      posts {
        id
        title
        body
        author
      }
    }
  `

  const { data, loading, error } = useQuery(typeDefs)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <Wrapper>
      <PostList>
        {data.posts.map((post: IPost) => (
          <PostWrapper key={post.id}>
            <Post post={post} />
          </PostWrapper>
        ))}
      </PostList>
    </Wrapper>
  )
}

export default App

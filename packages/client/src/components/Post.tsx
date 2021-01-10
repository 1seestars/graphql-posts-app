import React from 'react'
import styled from 'styled-components'
import { IPost } from '../interfaces/IPost'

interface IPostProps {
  post: IPost
}

const AuthorBlock = styled.div`
  margin-top: 20px;
  text-align: right;
  font-style: italic;
  color: #666;
`

const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <>
      <div>
        <h2>{post.title}</h2>
      </div>
      <div>{post.body}</div>
      <AuthorBlock>{post.author}</AuthorBlock>
    </>
  )
}

export default Post

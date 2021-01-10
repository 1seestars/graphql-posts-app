import { InMemoryCache, makeVar } from '@apollo/client'
import { IPost } from './interfaces/IPost'

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {}
      }
    }
  }
})

export const postsVar = makeVar<IPost[]>([])

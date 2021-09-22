import * as React from "react"
import Post from "../../gatsby-theme-minimal-blog/components/post"

type Props = {
  data: {
    post: any
    [key: string]: any
  }
  [key: string]: any
}

export default function MinimalBlogCorePost({ ...props }: Props) {
  return <Post {...props} />
}

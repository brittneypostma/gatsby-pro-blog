import React from "react"
import { Link } from "gatsby-link"

const PostList = ({ post }) => {
  const fm = post.frontmatter
  return (
    <article>
      <h3>{fm.title}</h3>
      <span>{fm.date}</span>
      <p>{post.excerpt}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }}></div> */}
    </article>
  )
}

export default PostList

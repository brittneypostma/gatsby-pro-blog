import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/PostList"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query getMarkdown {
      markdown: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD YYYY")
            }
            html
            excerpt(pruneLength: 280)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Posts</h2>
      {data.markdown.edges.map(({ node }) => (
        <PostList key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export default IndexPage

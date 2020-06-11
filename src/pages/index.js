import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ title, description }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Image />
      <p>{title}</p>
      <p>{description}</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

export default IndexPage

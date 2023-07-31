import React from "react"
import Layout from "../components/layout"
import Homepage from "../components/homepage"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Homepage content={data.homepage} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
 {
  homepage:  markdownRemark(fileAbsolutePath: {regex: "/src/content/homepage/homepage.md/"}) {
    frontmatter {
      emoji
      greetings
      subtitleHighlight
      subtitlePrefix
      introduce
      resumeLink
    }
    rawMarkdownBody
  }
    
}

`


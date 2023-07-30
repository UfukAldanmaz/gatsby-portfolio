import React from "react"
import Layout from "../components/layout"
import Homepage from "../components/homepage"
import { graphql } from 'gatsby'
import Projects from "../components/projects"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Homepage content={data.homepage} />
      {/* <Projects content={data.projects.edges[1].node} /> */}
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
    }
    rawMarkdownBody
  }
    
}

`


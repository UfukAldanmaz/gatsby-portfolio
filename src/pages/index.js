import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import { graphql } from 'gatsby'
import Projects from "../components/projects"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <About content={data.about} />
      {/* <Projects content={data.projects.edges[1].node} /> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
 {
  about:  markdownRemark(fileAbsolutePath: {regex: "/src/content/about/about.md/"}) {
    frontmatter {
      emoji
      greetings
      subtitleHighlight
      subtitlePrefix
      introduce
    }
  }
    
}

`


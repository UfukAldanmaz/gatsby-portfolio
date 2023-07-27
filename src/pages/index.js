import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import { graphql } from 'gatsby'
import Projects from "../components/projects"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <About content={data.about.edges[0].node} />
      {/* <Projects content={data.projects.edges[1].node} /> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
    
}

`


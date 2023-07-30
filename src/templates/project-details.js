import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

function ProjectDetails({ data }) {

  const { html } = data.markdownRemark

  const { stack, title, featuredImg, link } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <GatsbyImage image={getImage(featuredImg)} />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <div>Visit site on <a href={link} target='_blank'><strong>GitHub</strong></a></div>
        <br />
      </div>
    </Layout>
  )
}

export const query = graphql`

query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        link
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`



export default ProjectDetails
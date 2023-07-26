import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby';

function Projects({ data }) {

    console.log("data", data);

    const projects = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div>

                {projects.map(project => (
                    <div>
                        <h3>{project.frontmatter.title}</h3>
                        <h5>{project.frontmatter.stack}</h5>
                        <p>{project.frontmatter.description}</p>
                    </div>
                ))}
            </div>

        </Layout>
    )
}

export const query = graphql`
query ProjectsPage {

    allMarkdownRemark {
        nodes {
          frontmatter {
            description
            featuredImage
            stack
            title
          }
        }
      }
  }
`

export default Projects
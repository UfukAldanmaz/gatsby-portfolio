import React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'styled-components';

const StyledSection = styled.section`
.container {
    display: flex;
    flex-direction: row;
    gap: 50px;
}
h3{
    height: 50px;
    margin-bottom: 50px
}


`

function Projects({ data }) {

    console.log("data", data);
    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <StyledSection>
                <div className="container">
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div >
                                <h3>{project.frontmatter.title}</h3>
                                <GatsbyImage image={getImage(project.frontmatter.thumb)} />
                                <h5>{project.frontmatter.stack}</h5>
                            </div></Link>
                    ))}</div>
            </StyledSection>

        </Layout>
    )
}

export const query = graphql`
query ProjectsPage {

   allMarkdownRemark (sort: {frontmatter: {viewOrder: ASC}}) { 
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
              }
          }
          id
        }
      }
  }
`

export default Projects

// query ProjectsPage
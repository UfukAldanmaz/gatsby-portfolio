import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from 'gatsby'

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const About = ({ data }) => {
    const about = data.markdownRemark

    return (
        <Layout>
            <StyledSection id="about">
                <div className="description">{about.rawMarkdownBody}</div>
            </StyledSection>
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    markdownRemark(fileAbsolutePath: {regex: "/src/content/about/about.md/"}) {
        rawMarkdownBody
      }
  }
`

export default About
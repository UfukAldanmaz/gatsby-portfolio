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

    console.log("ABOUT", about);

    return (
        <Layout>
            <StyledSection id="about">
                <h1 className="title">
                    {about.frontmatter.greetings}{" "}
                    <span role="img" aria-label="emoji">
                        {about.frontmatter.emoji}
                    </span>
                    <br />
                    {about.frontmatter.introduce}
                </h1>
                <h2 className="subtitle">
                    {about.frontmatter.subtitlePrefix}{" "}
                    <span className="highlighted">{about.frontmatter.subtitleHighlight}</span>
                </h2>
                {/* <div className="description">{rawMarkdownBody}</div> */}
            </StyledSection>
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    markdownRemark(fileAbsolutePath: {regex: "/src/content/about/about.md/"}) {
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

export default About
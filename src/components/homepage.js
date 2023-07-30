import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

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
  .btn {
    height:50px;
    width:150px;
    background-color: #cdf3e1;
    border: 1px solid #b8daca;&:hover{
      background-color: #b8daca;
    }
    border-radius: 8px;
    cursor: pointer;

  }
`

const About = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content

  return (
    <StyledSection id="about">
      <h1 className="title">
        {frontmatter.greetings}{" "}
        <span role="img" aria-label="emoji">
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.introduce}
      </h1>
      <h2 className="subtitle">
        {frontmatter.subtitlePrefix}{" "}
        <span className="highlighted">{frontmatter.subtitleHighlight}</span>
      </h2>
      <div className="description">{rawMarkdownBody}</div>
      <br />
      <Link to="/projects">
        <button className="btn">My Projects</button>
      </Link>
    </StyledSection>
  )
}

export default About
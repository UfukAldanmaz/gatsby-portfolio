import { Link, StaticQueryDocument, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
  .socials {
    display: flex;
  justify-content: center;
    gap:10px
  }

`

const Footer = () => {

  const data = useStaticQuery(graphql`
  query SocialLinks {
    links: site {
      siteMetadata {
        social {
          github
          linkedIn
          githubIcon
          linkedInIcon
        }
      }
    }
    githubImg: file(relativePath: {eq: "github-mark-white.png"}) {
        childImageSharp {
          gatsbyImageData(width: 25)
        }
      }
    linkedInImg: file(relativePath: {eq: "LI-In-Bug.png"}) {
      childImageSharp {
        gatsbyImageData(width: 28)
      }
    }
    
  }
  `
  )

  const githubIcon = data.githubImg
  const linkedInIcon = data.linkedInImg
  const { github, linkedIn } = data.links.siteMetadata.social


  // console.log("ICON", githubIcon);

  return (
    <StyledFooter>
      {/* <h3>Under reconstruction</h3> */}
      <div className="socials">
        <a href={`https://github.com/${github}`} target="_blank">
          <GatsbyImage image={getImage(githubIcon)} width={100} alt="github-icon" />
        </a>
        <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank">
          <GatsbyImage image={getImage(linkedInIcon)} width={100} alt="linkedin-icon" />
        </a>
      </div>
    </StyledFooter>)
}

export default Footer
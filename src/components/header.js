import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
`
const StyledTabs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
`
const StyledLink = styled(props => <Link {...props} />)`
padding: 8px;
&:hover{
    border-bottom: 5px solid #cdf3e1;
}
`
const StyledResumeLink = styled(props => <a {...props} target="_blank">Resume</a>)`
padding: 8px;
&:hover{
    border-bottom: 5px solid #cdf3e1;
}
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" aria-label="home">
                <StyledLogo>My Portfolio</StyledLogo>
            </Link>
            <StyledTabs>

                <StyledLink to="/about">
                    About
                </StyledLink>
                <StyledLink to="/projects">
                    Projects
                </StyledLink>
                <StyledResumeLink href="/assets/Ufuk-Aldanmaz-Resume.pdf">

                </StyledResumeLink>
            </StyledTabs>
        </StyledHeader>
    )
}

export default Header
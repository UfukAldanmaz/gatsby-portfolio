// import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import React from "react"
// import styled from "styled-components"

// const StyledSection = styled.section`
//   .title {
//     margin-bottom: 0;
//   }
//   .subtitle {
//     margin-top: 0;
//   }
//   .highlighted {
//     box-shadow: inset 0 -2.5rem 0 #cdf3e1;
//   }
// `

// const Projects = ({ content }) => {
//   const { frontmatter } = content
//   let featuredImg = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
//   console.log("u", frontmatter)

  // const data = useStaticQuery(graphql`
  // query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             description
  //             featuredImage {
  //               childImageSharp {
  //                 gatsbyImageData
  //               }
  //             }
  //             projectTitle
  //             subtitleDesc
  //           }
  //         }
  //       }
  //     }
  //   }

  // `)

  // console.log("DATA", data);

//   return (

//     <StyledSection id="projects">
//       <div>
//         {
//           frontmatter.map(node => {
//             return (
//               <div>
//                 <h2 className="title">
//                   {node.projectTitle[0]}
//                 </h2>
//                 {/* <h4 className="subtitle">
//                 {node.subtitle}:
//               </h4> */}
//                 <h6>{node.subtitleDesc[0]}</h6>
//                 <div className="description">
//                   {/* {node.descriptionTitle} */}
//                   <p>{node.description[0]}</p>
//                   <GatsbyImage image={featuredImg} />
//                 </div>
//               </div>
//             )
//           }
//           )
//         }
//       </div>
//     </StyledSection>
//   )
// }

// export default Projects


// projects klasoru altinda her bir prjoje icin md file olur
// content klasorundeki projects.md dosyasinda sadece title olur
// title listlenir -> tiklaninca project-x.md dosyasindaki data gosterilir yeni sayfada.
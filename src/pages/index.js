import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle={"My blog"}>
        <p>I'm making this by following Gatsby Tutorial</p>
      <StaticImage
				alt = "Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src='../images/icon.png'
			>
			</StaticImage>
      </Layout>
    </div>
  )
}

export default IndexPage
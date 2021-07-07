import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

  return (
      <Layout pageTitle="Home Page">
        <StaticImage
          alt="Patriots Logo"
          src="http://evensondesign.com/wp-content/uploads/2013/04/patriots_a_logo_800x300.jpg"
        />
      </Layout>
  )
};

export default IndexPage

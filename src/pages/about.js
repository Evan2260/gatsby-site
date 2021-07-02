import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return(
    <main>
      <title>About</title>
        <Layout pageTitle="AboutMe">
          <h1>
            About Section
          </h1>
          <p>This is the about page.</p>
          <StaticImage
            alt="Flying Elvis"
            src="../images/flyingElvis.png"
          />
        </Layout>
    </main>
  )
};

export default About

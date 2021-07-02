import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = () => {
  return(
    <main>
      <title>About</title>
        <Layout pageTitle="AboutMe">
          <h1>
            About Section
          </h1>
          <p>This is the about page.</p>
        </Layout>
    </main>
  )
};

export default About

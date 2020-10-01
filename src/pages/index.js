import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Adamu M. Dankore" />
    <Section id="about" title="About Me">
      <p>
        I have shipped software that have been used around the world. I am a
        self-taught software engineer who specializes in responsive web designs.
      </p>
      <p>
        My design works have been seen more 13 million times and shared over
        231,674 times.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="Cambrex"
        link="https://cambrex.com"
        desc="Chemist, November 2017 - Present"
      />
      <Link
        title="Home Away From Home"
        link="https://homeawayfromhome.online"
        desc="Software Engineer, March 2018 - September 2020"
      />
      <Link
        title="Cambrex"
        link="https://cambrex.com"
        desc="Full-Stack Developer, September 2019 - December 2020"
      />
      <Link
        title="Freelancer"
        link="https://github.com/dankore"
        desc="Full-Stack Developer & Designer, January 2018 - present"
      />
    </Section>
    <Section id="projects" title="Sample Work">
      <Link
        title="My Nigerian Projects"
        link="https://mynigerianprojects.com/"
        desc="I post my projects, people bid on it. I save money. They make money."
      />
      <Link
        title="Harnak Spices"
        link="https://harnak.netlify.app/"
        desc="An e-commerce platform for buying a natural, healthy, and tasty spices."
      />
      <Link
        title="Shopping Aid"
        link="https://shopping-aid.herokuapp.com/"
        desc="An app that helps eliminate paper waste and makes managing shopping list easy."
      />
      <Link
        title="GSS Gwarinpa Contact Book"
        link="https://www.gssgcontactbook.com/"
        desc="Contact List For Present And Past GSS Gwarinpa Students, Abuja."
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Node.js, Express.js"
      />
      <Link title="Databases" desc="MongoDB, SQL" />
      <Link
        title="Other"
        desc="Amazon Web Services (AWS), CI / CD, API design, Agile / Scrum"
      />
    </Section>
  </Layout>
);

export default IndexPage;

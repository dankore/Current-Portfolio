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
    <Section id="upcoming-projects" title="Upcoming Project(s)">
      <Link
        title="Gwandara Media Youth Association Ara"
        desc="Client wants a web application for their organization."
      />
      <Link
        title="A real estate web application"
        desc="I want to build a web application to track who rents my properties, when their rent is due, maintenace requests and more."
      />
    </Section>
    <Section id="working-on" title="Project(s) I'm Working On">
      <Link
        title="Music Promostion Application"
        link="https://john-sido.netlify.app"
        desc="Client is a gospel singer and wants a web application to promote his music and also allows other artistes post their songs."
      />
    </Section>
    <Section id="recently-completed" title="Recently Completed Project(s)">
      <Link
        title="Harnak Spices"
        link="https://harnak.netlify.app"
        desc="An e-commerce website for Natural, Healthy and Tasty Spices."
      />
      <Link
        title="My Nigerian Projects"
        link="https://mynigerianprojects.com/"
        desc="I post my projects, people bid on it. I save money. They make money."
      />
    </Section>
  </Layout>
);

export default IndexPage;

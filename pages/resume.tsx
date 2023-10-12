import React from "react";
import Image from "next/image";
import Head from "next/head";
import { NextPage } from "next";

import "../styles/resume.css";
import ExperienceBox from "../components/ExperienceBox";

import GithubIcon from "../public/static/github.svg";
import LinkedInIcon from "../public/static/linkedin.svg";
import TwitterIcon from "../public/static/twitter.svg";
import BlogIcon from "../public/static/book.svg";
import DownloadIcon from "../public/static/download.svg";

const ResumePage: NextPage = () => {
  const handlePrintButtonClick = () => {
    window.print();
  };
  return (
    <div className="my-8">
      <Head>
        <title>Utkarsh Bhimte's Resume</title>
      </Head>
      <div className="container mx-auto px-6 md:px-0">
        <div className="page-grid">
          <section className="header-section md:flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/static/profile-photo.jpg"
                alt="Picture of the developer"
                height={65}
                width={65}
                className="rounded-full"
              />
              <div className="ml-6">
                <h3 className="text-xl font-medium">Utkarsh Bhimte</h3>
                <p className="text-gray-600">Senior Web Developer</p>
              </div>
            </div>
            <div className="grid items-center gap-12 grid-cols-5 mt-6 md:mt-0 ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/utkarshbhimte/"
              >
                <GithubIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/utkarsh-bhimte-9321a710a/"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/BhimteBhaisaab"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://blog.workofutkarsh.com/"
              >
                <BlogIcon />
              </a>
              <a onClick={handlePrintButtonClick}>
                <DownloadIcon />
              </a>
            </div>
          </section>

          <section className="highlight-section">
            <h3 className="section-heading">Resume Highlights</h3>
            <ul className="text-sm text-gray-600">
              <li>
                Built a CRM from scratch to scale with a robust native document
                editor
              </li>

              <li>
                Single-handledly built and architected ABAC(Attribute based
                access control) powered dashboard with form field level access
                modularity along with full domain level whitelabelling
              </li>

              <li>
                Built and shipped{" "}
                <a
                  href="https://www.producthunt.com/@utkarsh_bhimte/made"
                  target="_blank"
                  rel="noopener"
                >
                  7 products
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="experience-section">
            <h3 className="section-heading">Experience</h3>
            <div className="grid gap-10">
              <ExperienceBox
                companyName="Sr Frontend Developer, Zomentum"
                fromDate={new Date(2019, 2, 1)}
                active
                details={
                  <span>
                    Zomentum is a all-in-one solution for MSPs to manage their
                    sales seamlessly, currently grown to $500,000.00 MRR
                  </span>
                }
                toDate={new Date()}
              >
                <ul>
                  <li>
                    Started as the first developer to the FE codebase,
                    responsible for improving architecture, mentor the team and
                    build complex features
                  </li>
                  <li>
                    Buit a feature-rich robust document builder in React with
                    interactive blocks, also making it performant enough to
                    support long documents.
                  </li>
                  <li>
                    Have worked with the core team to architect and build a
                    fully modularized Reports module which supports multiple
                    chart types
                  </li>
                  <li>
                    Have taught and trained developers to start contrbuting to
                    the FE codebase.
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Frontend Developer , GetMyParking"
                fromDate={new Date(2018, 5, 1)}
                toDate={new Date(2019, 2, 31)}
                details={
                  <span>
                    Get My Parking is a Digital Parking Platform that integrates
                    any parking equipment and connects it to mobile and cloud
                    for a standardized seamless experience
                  </span>
                }
              >
                <ul>
                  <li>
                    Solo built a dynamic, modular, Attribute-Based Access
                    Controlled Robust dashboard for various operations and
                    analytics features using ReactJS, used to manage 1.5M user
                    accounts, exapanding across India, US and Europe.
                  </li>
                  <li>
                    Core-contributor to a web based dashboard console which can
                    be deployed to a RaspberryPi and can shows realtime parking
                    data and configure access management, providing hassle-free
                    parking revenue management, deployed to 50+ sites across US
                    and Europe.
                  </li>
                  <li>
                    Organized multiple React workshops to grow the Frontend Team
                    by 10+ developers
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Web Developer Freelancer, Wishfie"
                fromDate={new Date(2018, 2, 1)}
                toDate={new Date(2018, 5, 31)}
                details={
                  <span>
                    Wishfie empowers people to share their opinions on trending
                    news through their mobile cameras
                  </span>
                }
              >
                <ul>
                  <li>
                    Solo built a server-side rendered video based social webapp
                    using NextJS scaled upto 20,000+ users.
                  </li>
                  <li>
                    Implemented best practices for SEO optimization like dynamic
                    sitemap generation
                  </li>
                  <li>
                    Built a feature like story-like video player interaction in
                    React
                  </li>
                </ul>
              </ExperienceBox>

              <ExperienceBox
                companyName="Frontend Web Developer , Offrd"
                fromDate={new Date(2017, 1, 1)}
                toDate={new Date(2018, 2, 31)}
                details={
                  <span>
                    Offrd is a hiring platform which enables people to get hired
                    in high growth companies for business roles by solving
                    challenges
                  </span>
                }
              >
                <ul>
                  <li>
                    Core Contributor to the FE codebase of a hiring platform
                    with Rich text editing and video upload.
                  </li>
                  <li>
                    Built dashbaord for internal to manage content across the
                    webapp.
                  </li>
                </ul>
              </ExperienceBox>
              <ExperienceBox
                companyName="Frontend Developer Intern, Udacity"
                fromDate={new Date(2016, 10, 1)}
                toDate={new Date(2017, 1, 28)}
                details={
                  <span>
                    Udacity is a Edtech Startup providing courses taught by
                    industry pros from Google, FB, and more.
                  </span>
                }
              >
                <ul>
                  <li>
                    Was responsible for delivering all the Frontend requirement
                    from the BD team, including new campaign pages and custom
                    onboarding experiences
                  </li>
                  <li>
                    Worked on redesigning for the Indian subdomain of the
                    Udacity website according to the new design guide
                  </li>
                  <li>
                    Improved developer experience by configuring gulp for SASS
                    hot reloading, etc
                  </li>
                </ul>
              </ExperienceBox>
            </div>
          </section>

          <div className="skills-section grid gap-4">
            <section>
              <h3 className="section-heading">Contact</h3>
              <div>
                <span>Email: </span>
                <a href="mailto:workwithutkarsh@gmail.com">
                  workwithutkarsh@gmail.com
                </a>
              </div>
            </section>
            <section>
              <h3 className="section-heading">Skills</h3>

              <ul className="grid gap-4 text-sm text-gray-600">
                <li>
                  <span className="font-semibold">Languages:</span> Javascript,
                  Python, Rust, Typescript
                </li>
                <li>
                  <span className="font-semibold">Frontend:</span> React, Redux,
                  Chrome Extension, Svelte, PWA, GatsbyJS, NextJS, Framer
                  Motion, GraphQL, React Query, a11y, TailwindCSS, EmotionJS,
                  StyledComponents, Bootstrap, Material UI, Ant Design
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> NodeJS,
                  ExpressJS, Web Sockets
                </li>
                <li>
                  <span className="font-semibold">Databases:</span> MongoDB
                </li>
                <li>
                  <span className="font-semibold">Cloud:</span> AWS(EBS, S3, EC2
                  DynamoDB, CloudWatch, Route 53, Lambda), Heroku, Firebase
                  Firebase, Netlify, Vercel
                </li>
                <li>
                  <span className="font-semibold">Version Control:</span> Git
                </li>
                <li>
                  <span className="font-semibold">Testing:</span> React testing
                  library, Cypress
                </li>
                <li>
                  <span className="font-semibold">CI/CD:</span> Jenkins, Github
                  Actions
                </li>
                <li>
                  <span className="font-semibold">Data Science:</span> NumPy,
                  Conda, Basic Data Modelling
                </li>
                <li>
                  <span className="font-semibold">Management:</span> Jira,
                  Asana, Github Projects
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

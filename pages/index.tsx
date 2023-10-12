import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SplashScreen from "../components/page-components/index/SplashScreen";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Next.js Starter</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="A quick starter Template for Next.js with Tailwind CSS and Typescript"
      />
    </Head>
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-3 items-start">
          <div className="min-h-screen col-start-1 col-end-3">
            <div className="h-screen relative">
              <div style={{ bottom: "3rem", left: 0 }} className="absolute">
                <div className="subtext">Hey there</div>
                <h2 className="accent-heading text-5xl">I am Utkarsh</h2>
              </div>
            </div>
            <div className="py-12">
              <h4 className="accent-heading text-4xl">About me</h4>
              <p className="text-gray-700 max-w-md">
                I am a Fullstack Web developer based out of Bangalore with 3
                years in experience, passionate about shipping ideas to scale
                and helping others with their developer journeys.
              </p>
            </div>
            <div className="h-screen"></div>
          </div>
          <div className="avatar-wrapper">
            <div
              className="avatar w-full rounded-3xl bg-green-400"
              style={{ height: "80vh" }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .avatar-wrapper {
          position: sticky;
          top: 12rem;
          right: 0px;
          background: var(--primary-color);
          overflow: hidden;
          transition: all 0.3s ease-in-out 0s;
        }
      `}
    </style>
  </div>
);

export default Home;

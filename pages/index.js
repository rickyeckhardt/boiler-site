import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.hero}>
        <div className={utilStyles.heroContainer}>
          <div className={utilStyles.heroText}>
            <h1 className={utilStyles.h1HeroText}>
              The web's tastiest full stack boilerplates for Node.js
            </h1>
          </div>
          <div className={utilStyles.heroImage}>
            <img src="/images/undraw_ice_cream_s2rh.svg" alt="Ice Cream"></img>
          </div>
        </div>
      </section>
      <section className={utilStyles.heroSubtext}>
        <h2>
          BoilerStack helps you get up and running quickly for your next Node.js
          project. Pick the stack, download the template, and start building.
        </h2>
        <button>Download v0.0.0</button>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

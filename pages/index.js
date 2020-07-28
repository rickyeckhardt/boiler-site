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
        <h1>The web's tastiest full stack boilerplates for Node.js</h1>
        <h2>
          BoilerStack helps you get up and running quickly for your next Node.js
          project. Pick you stack, download the template, and start building.
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

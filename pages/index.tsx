import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Emoji from "react-emoji-render";
import Date from "../components/date";

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.intro}>
        <p>
          Built and maintained by{" "}
          <a href="https://ardy.me/" target="_blank">
            Ardy
          </a>
          , a
          <Emoji text=":computer: Software Engineer who loves :br: Brazilian Jiu Jitsu (BJJ)." />
          <br />
          <Emoji text="He uses this web app is to keep notes of his BJJ journey." />
        </p>
        <p>
          <Emoji text="He built this web app when he was on my 14-day :mask: COVID quarantine in :ca: Canada." />
        </p>
        <p>
          The code started off from the{" "}
          <a href="https://nextjs.org/learn" target="_blank">
            {" "}
            Next.js tutorial
          </a>
          . <br />
          This project is Open Source under MIT license.{" "}
          <a href="https://github.com/ardydedase/bjj">Download on GitHub</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Emoji text=":blue_book:" /> Posts
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

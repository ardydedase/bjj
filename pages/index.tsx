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
          Hi, I'm{" "}
          <a href="https://ardy.me/" target="_blank">
            Ardy
          </a>
          .{" "}
          <Emoji text="I'm a :computer: Software Engineer who loves :br: Brazilian Jiu Jitsu (BJJ)." />
          <br />
          <Emoji text="I use this web app is to keep notes of what I learn about BJJ." />
        </p>
        <p>
          <Emoji
            text="I built this web app when I was on my 14-day :mask: COVID quarantine after my
          arrival in :ca: Canada."
          />
        </p>
        <p>
          The code started off from the{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          <Emoji text=":blue_book:" /> Notes
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

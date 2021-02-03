import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Video from "../../components/video";
import utilStyles from "../../styles/utils.module.css";
import Emoji from "react-emoji-render";

import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    videoId: string;
    stamps: Array<{ timestamp; content }>;
  };
}) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>
          <Emoji text={`${postData.title}`} />
        </h1>
        <div className={utilStyles.lightText}>
          <Emoji text=":calendar:" /> <Date dateString={postData.date} />
        </div>
        <Video videoId={postData.videoId} stamps={postData.stamps} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

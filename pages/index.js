import Head from "next/head";
import Header from "../src/components/Header";
import Layout from "../src/components/Layout";
import Bio from "../src/components/Bio";
import Work from "../src/components/Work"
import About from "../src/components/About"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>Amarpreet Singh | Developer & Designer</title>
        <meta content="Amarpreet Singh, Developer" name="title"></meta>

        <meta content="Amarpreet Singh, Developer" name="twitter:title"></meta>
        <meta
          content="The personal portfolio of Amarpreet Singh, a developer and UI designer."
          name="description"
        ></meta>
        <meta
          content="The personal portfolio of Amarpreet Singh, a developer and UI designer."
          name="twitter:description"
        ></meta>
        <meta
          content="The personal portfolio of Amarpreet Singh, a developer and UI designer."
          name="og:description"
        ></meta>
        <meta content="/og.png" property="og:image"></meta>
        <meta content="/og.png" property=" og:image:secure_url"></meta>
        <meta content="/og.png" name="twitter:image"></meta>
        <meta content="1200" property="og:image:width"></meta>
        <meta content="630" property="og:image:height"></meta>
        <meta content="summary_large_image" name="twitter:card"></meta>
        <meta content="en" property="og:locale"></meta>
        <link href="/favicon.svg" rel="icon" type="image/svg+xml"></link>
        <link color="#000" href="/favicon.svg" rel="mask-icon"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header siteTitle="Amarpreet Singh"></Header>
     
      <main>
      <Bio></Bio>
      <Work></Work>
      <About></About>
      <Contact></Contact>
      </main>
      <Footer></Footer>
    </Layout>
    
    </>
  );
}

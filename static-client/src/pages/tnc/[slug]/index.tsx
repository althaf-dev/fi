import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI}/api/terms-and-conditions-pages`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  const data = await res.json();
  const paths = data.data.map((data: any) => ({
    params: { slug: data.attributes.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `${process.env.STRAPI}/api/terms-and-conditions-pages?filters[slug]=${params.slug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return { props: { data } };
}

const Test = ({ data }: any) => {
  return (
    <>
    <Head>
        <title>{data.data[0].attributes.title}</title>
        <meta name="description" content={data.data[0].attributes.description} />
        <meta name="og:title" content={data.data[0].attributes.title} />
        <meta name="og:description" content={data.data[0].attributes.description} />
    </Head>
      <div
        style={{
          width: "80%",
          margin: "auto",
          padding: "40px",
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: data.data[0].attributes.Content,
          }}
        ></div>
      </div>
    </>
  );
};

export default Test;

import { GetServerSideProps } from "next";
import { streamToPromise, SitemapStream } from 'sitemap'
import { Readable } from "stream";
import { getAllArticles } from "../article";


const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const articleUrls = getAllArticles().filter(article => !article.hidden && !article.origin).map(article => `/blog/${article.id}`);

  const urls = [
    '/',
    '/blog',
    '/codeduet',
    '/feed.xml',
    ...articleUrls,
  ] as const

  const sitemapXmlString = (
    await streamToPromise(
      Readable.from(
        urls
         
      ).pipe(
        new SitemapStream({
          hostname: `https://rogovoy.me`,
        }),
      ),
    )
  ).toString()

  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemapXmlString)
  res.end()

  return {
    props: {},
  };
};

export default Sitemap;

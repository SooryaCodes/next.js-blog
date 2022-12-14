import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const posts = [
    { title: "React Testing", excerpt: "Learn react for free" },
    { title: "React Tailwind", excerpt: "Learn react for free" },
  ];
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-900 text-white">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

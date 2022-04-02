import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import imageUrlBuilder from "@sanity/image-url";

import Header from "../components/commons/header";
import Footer from "../components/commons/Footer";

export default function Home({ posts }) {
  console.log(posts);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "ffwh2kf8",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <Header />
      {/* <NextSeo
        title="Career Taxi Blog"
        description="All the resources you will need in making an informed career choice in one place."
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      /> */}
      <div className="mx-auto my-16">
        <div className="px-5">
          {mappedPosts.length ? (
            mappedPosts.map((p, index) => (
              <div
                onClick={() => router.push(`/post/${p.slug.current}`)}
                key={index}
              >
                <img src={p.mainImage} alt={p.title} />
                <h1 className="mt-6 mb-16 text-headFour font-semibold leading-tight">
                  {p.title}
                </h1>
                {/* Description of the blog (First few lines) */}
                {/* <p>{p.body[0].children[0].text.substring(0, 100) + "..."}</p> */}
              </div>
            ))
          ) : (
            <>No Guides Yet</>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "post"] | order(_createdAt desc)' // right statement is for sorting blogs newest to oldest
  );
  const url = `https://ffwh2kf8.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};

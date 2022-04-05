import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import PortableText from "react-portable-text";

import Header from "../../components/commons/header.js";
import Footer from "../../components/commons/footer.js";
import YouTube from "react-youtube";

const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = ImageUrlBuilder({
      projectId: "ffwh2kf8",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Header />
      <div className="my-20 px-5 md:mx-auto md:mb-44 md:max-w-3xl">
        <h1 className="mb-12 text-center text-headThree font-bold leading-tight lg:mb-16 lg:text-headTwo">
          {title}
        </h1>
        {imageUrl && <img className="mb-10" src={imageUrl} alt="image" />}
        {/* <div>
          <BlockContent blocks={body} />
        </div> */}
        <div>
          {/* <PortableText 
            className=""
            dataset="production"
            projectId="ffwh2kf8"
            blocks={body}
            serializers={{
              block: {
                h2: (props) => (
                  <h2
                    className="mb-2 bg-creame py-2 pl-1 text-bodyOne font-semibold leading-tight"
                    {...props}
                  />
                ),
                normal: (props) => (
                  <p
                    className="mb-4 text-bodyTwo font-normal leading-normal"
                    {...props}
                  />
                ),
              },
              marks: {
                link: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-black underline decoration-black underline-offset-2"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                youtube: ({ node }) => {
                  const { url } = node;
                  const id = getYouTubeId(url);
                  return <YouTube videoId={id} />;
                },
              },
            }}
          /> */}
          <PortableText
            className=""
            dataset="production"
            projectId="ffwh2kf8"
            content={body}
            serializers={{
              h2: (props) => (
                <h2
                  className="mb-5 mt-10 bg-yellow py-2 pl-2 text-headFour font-semibold leading-tight"
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  className="mt-8 mb-4 bg-[#FFC03375] py-2 pl-2 text-bodyOne font-medium leading-tight"
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  className="mb-4 text-bodyTwo font-normal leading-normal"
                  {...props}
                />
              ),
              li: (props) => <li className="ml-5 list-disc pb-2" {...props} />,
              link: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  className="text-bodyOne text-black underline decoration-black underline-offset-2"
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug; // getting the slug
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  // querying the data we want from sanity then passing it to url for fetching
  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://ffwh2kf8.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0]; // result will have a property called result. getting the [0] because we want first the first slug (pageSlug)

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};

export default Post;

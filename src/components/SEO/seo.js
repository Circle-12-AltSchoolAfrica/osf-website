import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, article, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername } = site.siteMetadata;

  const seo = {
    title: `${defaultTitle} | ${title}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
        content="Open Source Community Africa, OSCA, OSCAFRICA, Open Source Festival, OSF, OSCAFEST, Open Source, Open Source in Africa, Open Source Event in Africa"
      />
      <meta name="image" content={seo.image} />
      <link rel="icon" href="/osca-logo.png" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  article: PropTypes.bool,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  twitterUsername: PropTypes.string
};

SEO.defaultProps = {
  title: null,
  article: false,
  description: null,
  url: null,
  image: null,
  twitterUsername: null
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

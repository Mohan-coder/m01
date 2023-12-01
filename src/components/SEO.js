import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ dynamicTitle }) => {
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="author" content="" />
      <meta
        name="description"
        content="One Stop platform for Digital Marketing to  grow in tech"
      />
      <meta
        name="keywords"
        content=" Tech, AI-Assistance,  marketing , Data migration"
      />
      {/* Open Graph (Facebook) : */}
      <meta property="og:title" content="AraliTechnologies" />
      <meta
        property="og:description"
        content="One Stop platform for Digital Marketing to  grow in tech"
      />
      <meta
        property="og:image"
        content=""
      />
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AraliTechnologies" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter : */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="AraliTechnologies" />
      <meta
        property="twitter:description"
        content="One Stop platform for women to excel their career in tech"
      />
      <meta
        property="twitter:image"
        content=""
      />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon : */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Helmet>
  );
};

export default SEO;

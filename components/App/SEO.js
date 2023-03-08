/**
 * Copyright (c) 2022, Red Vector, Inc.
 */

import React from "react";
import Head from "next/head";
import config from "@/config";

const AppSEO = ({ title, description }) => {
  const siteTitle = config.APP.TITLE;

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta
        name="description"
        content={description || config.APP.DESCRIPTION}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || config.APP.DESCRIPTION}
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.APP.AUTHOR} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || config.APP.DESCRIPTION}
      />
    </Head>
  );
};

export default AppSEO;

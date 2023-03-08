/**
 * All rights reserved
 */

import React from "react";

import { AppSEO, AppNavbar } from "@/components/App";
import { Layout, FloatButton } from "antd";

const AppLayout = (props) => {
  return (
    <Layout>
      <AppSEO title={props.title || ""} description={props.description || ""} />
      <AppNavbar onCurrent={props.onCurrent} />
      <main>
        <Layout sx={{ py: 3 }}>{props.children}</Layout>
      </main>
      <FloatButton.BackTop />
    </Layout>
  );
};

export default AppLayout;

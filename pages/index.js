import React, { useState } from "react";
import BlogList from "@/modules/BlogList";
import UserList from "@/modules/UserList";
import { AppLayout } from "@/layouts";
import { Card } from "antd";

export default function Home() {
  const [current, setCurrent] = useState("blog");

  return (
    <AppLayout title="Home" onCurrent={setCurrent}>
      <Card>{current === "blog" ? <BlogList /> : <UserList />}</Card>
    </AppLayout>
  );
}

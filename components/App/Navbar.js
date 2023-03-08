/**
 * All rights reserved
 */

import React, { useState } from "react";
import { Button, Space } from "antd";

const AppNavbar = (props) => {
  const [current, setCurrent] = useState("blog");

  const handleClick = (type) => {
    setCurrent(type);
    props.onCurrent(type);
  };

  return (
    <Space>
      <Button
        type={`${current === "blog" ? "dashed" : "text"}`}
        onClick={() => handleClick("blog")}
      >
        Blog List
      </Button>
      <Button
        type={`${current === "user" ? "dashed" : "text"}`}
        onClick={() => handleClick("user")}
      >
        User List
      </Button>
    </Space>
  );
};

export default AppNavbar;

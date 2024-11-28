import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x); // Split path and filter empty strings

  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Repository list</Link>
      </Breadcrumb.Item>
      {pathname.length > 0 && pathname[0] === "repo" && pathname[1] ? (
        <Breadcrumb.Item>
          <Link to={`/repo/${pathname[1]}`}>Repository details {pathname[1]}</Link>
        </Breadcrumb.Item>
      ) : null}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
import React from "react";
import { Layout, Typography } from "antd";
import AppBreadcrumb from "./AppBreadcrumb";

const { Title } = Typography;
const { Header, Content } = Layout;

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Title level={3} style={{ color: "#fff" }}>GitHub Repo Viewer</Title>
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            <AppBreadcrumb />
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CommonLayout;

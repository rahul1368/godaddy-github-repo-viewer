import React from "react";
import { Card, Flex, Table, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useRepo } from "../context/RepoContext";

const ListView: React.FC = () => {
  const navigation = useNavigate();
  const { repos } = useRepo();

  return (
    <Flex justify="center" align="center" style={{ flexDirection: "column" }}>
      <Typography.Title level={2}>Github Repos</Typography.Title>
      <Card
        style={{ width: "80%", marginTop: "20px", height: "80vh", overflowY: "auto" }}
        styles={{
          body: {
            paddingBottom: "20px"
          }
        }}
        title={
          <Flex style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography.Title level={3}>List of repositories</Typography.Title>
          </Flex>
        }
        bordered
        hoverable
      >
        <Table
          style={{ width: "100%" }}
          size="large"
          rowClassName={(row, index) => (index % 2 === 0 ? "even" : "odd")}
          pagination={false}
          dataSource={repos}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id",
              width: 100,
            },
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
              width: 200,
            },
            {
              title: "Description",
              dataIndex: "description",
              key: "description",
              width: 400,
            },
          ]}
          rowKey="name"
          bordered
          onRow={(record) => {
            return {
              onClick: () => {
                navigation(`/repo/${record.id}`);
              },
            };
          }}
        />
      </Card>
      <div style={{ marginTop: "20px" }} />
    </Flex>
  );
};

export default ListView;

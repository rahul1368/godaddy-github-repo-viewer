import { Card, Space, Table } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function RepoOwnerFollowersList({
  followers_url,
}: {
  followers_url: string;
}) {
  const [followers, setFollowers] = useState({
    list: [],
    loading: false,
    error: false,
    erorMessage: "",
  });

  const fetchFollowers = useCallback(async () => {
    try {
      setFollowers((state) => ({
        ...state,
        loading: true,
      }));
      const response = await axios.get(followers_url);
      console.log(response.data);
      setFollowers((state) => ({
        ...state,
        list: response.data,
      }));
    } catch (error: any) {
      setFollowers((state) => ({
        ...state,
        loading: false,
        error: true,
        erorMessage: error?.message,
      }));
    } finally {
      setFollowers((state) => ({
        ...state,
        loading: false,
      }));
    }
  }, [followers_url]);
  useEffect(() => {
    fetchFollowers();
  }, [fetchFollowers]);
  return (
    <Card
      title={
        <Space style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <TeamOutlined style={{ fontSize: "24px", color: "#52c41a" }} />
          <span>Followers</span>
        </Space>
      }
      loading={followers.loading}
      style={{
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Table
        dataSource={followers.list}
        rowClassName={(row, index) => (index % 2 === 0 ? "even" : "odd")}
        pagination={false}
        style={{ width: "100%", overflow: "auto", height: "400px" }}
        columns={[
          {
            title: "Avatar URL",
            key: "avatar_url",
            width: 100,
            render: (record: any) => (
              <Link to={`${record.url}`}>
                <img
                  src={record.avatar_url}
                  alt={record.login}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </Link>
            ),
          },
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 100,
          },
          {
            title: "Login",
            dataIndex: "login",
            key: "login",
            align: "center",
            width: 200,
          },
          {
            title: "User View Type",
            dataIndex: "user_view_type",
            key: "user_view_type",
            align: "center",
            width: 200,
          },
        ]}
      />
    </Card>
  );
}

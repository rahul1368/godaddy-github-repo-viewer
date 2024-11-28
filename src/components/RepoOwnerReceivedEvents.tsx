import { Card, Flex, Space, Table, Tag, Typography } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  FileTextOutlined,
} from '@ant-design/icons';

export default function RepoOwnerReceivedEvents({
  events_url,
}: {
  events_url: string;
}) {
  const [eventsList, setEventsList] = useState({
    list: [],
    loading: false,
    error: false,
    erorMessage: "",
  });

  const fetchEvents = useCallback(async () => {
    try {
      setEventsList((state) => ({
        ...state,
        loading: true,
      }));
      const response = await axios.get(events_url);
      console.log(response.data);
      setEventsList((state) => ({
        ...state,
        list: response.data,
      }));
    } catch (error: any) {
      setEventsList((state) => ({
        ...state,
        loading: false,
        error: true,
        erorMessage: error?.message,
      }));
    }
  }, [events_url]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);
  return (
    <Card
      title={
        <Space style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <FileTextOutlined style={{ fontSize: '24px', color: '#fadb14' }} />
          <span>Received Events</span>
        </Space>
      }
      bordered
      hoverable
    >
      <Table
        style={{ width: "100%", height: "400px", overflow: "auto" }}
        rowClassName={(row, index) => (index % 2 === 0 ? "even" : "odd")}
        pagination={false}
        dataSource={eventsList.list}
        columns={[
          {
            title: "Actor",
            key: "actor",
            width: 200,
            render: (record) => {
              return (
                <Flex style={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
                  <img
                    src={record.actor.avatar_url}
                    alt={record.actor.login}
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  />
                  <Typography.Text strong style={{ fontSize: "12px", width: "100px" }}>{record.actor.display_login}</Typography.Text>
                </Flex>
              )
            }
          },
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 100,
          },
          {
            title: "Type",
            dataIndex: "type",
            width: 200,
            render: (record) => {
              return (
                <Tag
                  style={{ fontSize: "12px" }}
                  color="geekblue"
                  key={record.id}
                >
                  {record}
                </Tag>
              )
            }
          },
          {
            title: "Public",
            key: "public",
            width: 100,
            render: (record) => {
              return (
                <Typography.Text>{record.public ? "True" : "False"}</Typography.Text>
              )
            }
          },
        ]}
      />
    </Card>
  );
}
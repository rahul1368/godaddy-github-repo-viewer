import { Table, Tabs, Typography } from "antd";
import {
  CodeOutlined,
  PullRequestOutlined,
  BranchesOutlined,
  ProjectOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

export default function RepoDetailsTabsSection({
  branches_url,
}: {
  branches_url: string;
}) {
  return (
    <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
      <TabPane
        tab={
          <span>
            <CodeOutlined /> Code
          </span>
        }
        key="1"
      >
        <Paragraph>This section would show the code files.</Paragraph>
      </TabPane>
      <TabPane
        tab={
          <span>
            <PullRequestOutlined /> Pull Requests
          </span>
        }
        key="2"
      >
        <Paragraph>
          This section would show pull requests related to this repo.
        </Paragraph>
      </TabPane>
      <TabPane
        tab={
          <span>
            <BranchesOutlined /> Branches
          </span>
        }
        key="3"
      >
        <RepoDetailsBranchesList branches_url={branches_url} />
        <Paragraph>
          This section would show branches of the repository.
        </Paragraph>
      </TabPane>
      <TabPane
        tab={
          <span>
            <ProjectOutlined /> Projects
          </span>
        }
        key="4"
      >
        <Paragraph>
          This section would show projects related to this repository.
        </Paragraph>
      </TabPane>
      <TabPane
        tab={
          <span>
            <MessageOutlined /> Wiki
          </span>
        }
        key="5"
      >
        <Paragraph>
          This section would show wiki related to this repository.
        </Paragraph>
      </TabPane>
    </Tabs>
  );
}

const RepoDetailsBranchesList = ({
  branches_url
}: {
  branches_url: string;
}) => {
  const [branches, setBranches] = useState({
    list: [],
    loading: false,
    error: false,
    erorMessage: "",
  });
  const fetchBranches = useCallback(async () => {
    try {
      setBranches((state) => ({
        ...state,
        loading: true
      }))
      const response = await axios.get(branches_url);
      console.log(response.data);
      setBranches((state: any) => ({
        ...state,
        list: response.data,
      }))
    } catch (error: any) {
      
    } finally {
      setBranches((state) => ({
        ...state,
        loading: false
      }))
    }
  }, [branches_url]);

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);
  return (
    <Table
      dataSource={branches.list}
      columns={[
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Commit",
          key: "commit_count",
          render: (record: any) => {
            return(
              <Link to={`${record.commit.url}`}>
                {record.commit.sha}
              </Link>
            )
          }
        },
      ]}
      rowKey="name"
      loading={branches.loading}
      pagination={{ pageSize: 10 }}
    />
  );
};

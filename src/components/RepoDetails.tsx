// src/components/RepoDetails.tsx
import React from "react";
import { Card, Typography, Divider, Flex, Row, Select } from "antd";
import RepoDetailsHeader from "./RepoDetailsHeader";
import RepoDetailsTabsSection from "./RepoDetailsTabsSection";
import RepoOwnerProfile from "./RepoOwnerProfile";
import { formatDateString } from "../utils";
import useBranches from "../hooks/useBranches";
import { BranchesOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const RepoDetails: React.FC<any> = ({ repo }) => {
  const branches = useBranches(repo?.branches_url?.replace("{/branch}", ""));
  return (
    <Card
      style={{ margin: "20px" }}
      title={
        <Flex style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Typography.Title level={3}>Repository details</Typography.Title>
        </Flex>
      }
    >
      <RepoDetailsHeader
        name={repo.name}
        description={repo.description}
        default_branch={repo.default_branch}
        stargazers_count={repo.stargazers_count}
        forks_count={repo.forks_count}
        watchers={repo.watchers}
        open_issues_count={repo.open_issues_count}
        html_url={repo.html_url}
      />
      <Row justify="space-between">
        {branches?.list?.length > 0 && (<Select
          suffixIcon={<BranchesOutlined />}
          defaultValue={repo.default_branch}
          style={{ width: 120 }}
          options={branches?.list?.map((branch: any) => ({
            value: branch.name,
            label: branch.name,
          }))}
        />)}
        <Typography.Text><b>Created at:</b> {formatDateString(repo.created_at)}</Typography.Text>
        <Typography.Text><b>Updated at:</b> {formatDateString(repo.updated_at)}</Typography.Text>
      </Row>
      {/* Tabs for different sections */}
      <RepoDetailsTabsSection
        branches_url={repo.branches_url.replace("{/branch}", "")}
      />
      <RepoOwnerProfile
        login={repo.owner.login}
        avatar_url={repo.owner.avatar_url}
        events_url={repo.owner.events_url}
        followers_url={repo.owner.followers_url}
        following_url={repo.owner.following_url}
        gists_url={repo.owner.gists_url}
        gravatar_id={repo.owner.gravatar_id}
        html_url={repo.owner.html_url}
        id={repo.owner.id}
        node_id={repo.owner.node_id}
        organizations_url={repo.owner.organizations_url}
        received_events_url={repo.owner.received_events_url}
        repos_url={repo.owner.repos_url}
        site_admin={repo.owner.site_admin}
        starred_url={repo.owner.starred_url}
        subscriptions_url={repo.owner.subscriptions_url}
        type={repo.owner.type}
        url={repo.owner.url}
        user_view_type={repo.owner.user_view_type}
      />
      <Divider />
      <Paragraph>
        <strong>Language:</strong>&nbsp; {repo.language}
      </Paragraph>
      <Paragraph>
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </Paragraph>
    </Card>
  );
};

// Usage example
const AppRepoDetails: React.FC<any> = ({ repo }: { repo: any }) => {
  return (
    <div style={{ padding: "20px" }}>
      <RepoDetails repo={repo} />
    </div>
  );
};

export default AppRepoDetails;

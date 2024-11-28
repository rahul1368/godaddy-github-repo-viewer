// src/components/RepoDetails.tsx
import React from "react";
import { Card, Typography, Divider, Flex } from "antd";
import RepoDetailsHeader from "./RepoDetailsHeader";
import RepoDetailsTabsSection from "./RepoDetailsTabsSection";
import RepoOwnerProfile from "./RepoOwnerProfile";

const { Paragraph } = Typography;

const RepoDetails: React.FC<any> = ({ repo }) => {
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

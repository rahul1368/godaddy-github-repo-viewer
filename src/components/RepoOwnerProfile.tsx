import React from "react";
import { Card, Avatar, Typography, Row, Col, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import RepoOwnerFollowersList from "./RepoOwnerFollowersList";
import RepoOwnerReceivedEvents from "./RepoOwnerReceivedEvents";

interface RepoOwnerProfileProps {
  login: string;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  user_view_type: string;
}

const RepoOwnerProfile: React.FC<RepoOwnerProfileProps> = ({
  login,
  avatar_url,
  events_url,
  followers_url,
  following_url,
  gists_url,
  gravatar_id,
  html_url,
  id,
  node_id,
  organizations_url,
  received_events_url,
  repos_url,
  site_admin,
  starred_url,
  subscriptions_url,
  type,
  url,
}) => {
  return (
    <Card
      key={node_id}
      title={
        <Flex
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography.Title level={3}>Repository Owner</Typography.Title>
          <UserOutlined style={{ fontSize: "24px" }} />
        </Flex>
      }
      style={{
        width: "100%",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Row gutter={16} style={{ backgroundColor: "#f0f0f0", padding: "16px" }}>
        <Col span={6}>
          <Avatar data-testid="avatar_url" size={128} src={avatar_url} icon={<UserOutlined />} />
        </Col>
        <Col span={18}>
          <Typography.Title level={3} data-testid="login">{login}</Typography.Title>
          <Typography.Text type="secondary">
            {type} {site_admin && <span>(Site Admin)</span>}
          </Typography.Text>
          <div style={{ marginTop: "16px" }}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <Typography.Link>View Profile</Typography.Link>
            </a>
            <a
              data-testid="repos_url"
              href={repos_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "16px" }}
            >
              <Typography.Link>View Repositories</Typography.Link>
            </a>
            <a
              data-testid="gists_url"
              href={gists_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "16px" }}
            >
              <Typography.Link>View Gists</Typography.Link>
            </a>
            <a
              data-testid="followers_url"
              href={followers_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "16px" }}
            >
              <Typography.Link>View Followers</Typography.Link>
            </a>
            <a
              href={following_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "16px" }}
            >
              <Typography.Link>View Following</Typography.Link>
            </a>
            <a
              data-testid="organizations_url"
              href={organizations_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "16px" }}
            >
              <Typography.Link>View Organizations</Typography.Link>
            </a>
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "16px" }}>
        <Col span={12}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <RepoOwnerFollowersList followers_url={followers_url} />
          </Card>
        </Col>

        <Col span={12}>
          <Card bordered={false} style={{ textAlign: "center" }}>
            <RepoOwnerReceivedEvents events_url={received_events_url} />
          </Card>
        </Col>

        {gravatar_id && (
          <Col span={8}>
            <Card bordered={false} style={{ textAlign: "center" }}>
              <img
                src={`https://www.gravatar.com/avatar/${gravatar_id}`}
                alt="Gravatar"
              />
              <div>Gravatar ID</div>
              {gravatar_id}
            </Card>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default RepoOwnerProfile;

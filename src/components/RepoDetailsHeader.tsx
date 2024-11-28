import { Col, Divider, Flex, Tag, Typography, Anchor } from "antd";

const { Title, Text } = Typography;
const { Link } = Anchor;

export default function RepoDetailsHeader({
  name,
  description,
  default_branch,
  stargazers_count,
  forks_count,
  watchers,
  open_issues_count,
  html_url,
}: {
  name: string;
  description: string;
  default_branch: string;
  stargazers_count: number;
  forks_count: number;
  watchers: number;
  open_issues_count: number;
  html_url: string;
}) {
  return (
    <Flex style={{ flexDirection: "column", justifyContent: "flex-start" }}>
      <Title level={3} style={{ textAlign: "left" }}>
        <Link
          href={`${html_url}`}
          target="_blank"
          title={name}
        />
      </Title>
      <Text style={{ textAlign: "left" }}>{description}</Text>
      <Divider />
      <Flex gap={16}>
        <Col>
          <Tag color="gold" style={{ borderRadius: "4px", padding: "4px" }}>⭐ <span data-testid="stargazers_count">{stargazers_count}</span> Stars</Tag>
        </Col>
        <Col>
          <Tag color="blue" style={{ borderRadius: "4px", padding: "4px" }}>🍴 <span data-testid="forks_count">{forks_count}</span> Forks</Tag>
        </Col>
        <Col>
          <Tag color="blue" style={{ borderRadius: "4px", padding: "4px" }}>🍴 <span data-testid="watchers">{watchers}</span> Watchers</Tag>
        </Col>
        <Col>
          <Tag color="green" style={{ borderRadius: "4px", padding: "4px" }}>🐛 <span data-testid="open_issues_count">{open_issues_count}</span> Open Issues</Tag>
        </Col>
      </Flex>
      <Divider />
    </Flex>
  );
}

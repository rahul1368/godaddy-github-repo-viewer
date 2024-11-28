import { Col, Divider, Flex, Row, Tag, Typography, Anchor } from "antd";

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
      <Title level={3}>
        <Link
          href={`${html_url}`}
          target="_blank"
          title={name}
        />
      </Title>
      <Text>{description}</Text>
      <Text>{default_branch}</Text>
      <Divider />
      <Row gutter={16}>
        <Col span={6}>
          <Tag color="gold">⭐ {stargazers_count} Stars</Tag>
        </Col>
        <Col span={6}>
          <Tag color="blue">🍴 {forks_count} Forks</Tag>
        </Col>
        <Col span={6}>
          <Tag color="blue">🍴 {watchers} Watchers</Tag>
        </Col>
        <Col span={6}>
          <Tag color="green">🐛 {open_issues_count} Open Issues</Tag>
        </Col>
      </Row>
      <Divider />
    </Flex>
  );
}

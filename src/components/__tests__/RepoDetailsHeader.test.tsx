
import { render, screen } from '@testing-library/react';
import RepoDetailsHeader from '../RepoDetailsHeader';

const repo = {
  "name": "gdapi-ui",
  "description": "An in-browser client for Go Daddy® REST APIs",
  "default_branch": "master",
  "stargazers_count": 3,
  "forks_count": 4,
  "watchers": 3,
  "open_issues_count": 1,
  "html_url": "https://github.com/godaddy/gdapi-ui"
};

describe('RepoDetailsHeader', () => {
  it('should render the repository details', () => {
    render(<RepoDetailsHeader {...repo} />);
    expect(screen.getByText(repo.name)).toBeInTheDocument();
    expect(screen.getByText(repo.description)).toBeInTheDocument();
    expect(screen.getByTestId("stargazers_count")).toBeInTheDocument();
    expect(screen.getByTestId("forks_count")).toBeInTheDocument();
    expect(screen.getByTestId("watchers")).toBeInTheDocument();
    expect(screen.getByTestId("open_issues_count")).toBeInTheDocument();
    expect(screen.getByTestId("stargazers_count")).toHaveTextContent(repo.stargazers_count.toString());
    expect(screen.getByTestId("forks_count")).toHaveTextContent(repo.forks_count.toString());
    expect(screen.getByTestId("watchers")).toHaveTextContent(repo.watchers.toString());
    expect(screen.getByTestId("open_issues_count")).toHaveTextContent(repo.open_issues_count.toString());
  });
});
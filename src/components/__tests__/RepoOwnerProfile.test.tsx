import { render, screen, within } from "@testing-library/react";
import RepoOwnerProfile from "../RepoOwnerProfile";

const repoOwnerProfileData = {
  "login": "godaddy",
  "avatar_url": "https://avatars.githubusercontent.com/u/1406546?v=4",
  "events_url": "https://api.github.com/users/godaddy/events{/privacy}",
  "followers_url": "https://api.github.com/users/godaddy/followers",
  "following_url": "https://api.github.com/users/godaddy/following{/other_user}",
  "gists_url": "https://api.github.com/users/godaddy/gists{/gist_id}",
  "gravatar_id": "",
  "html_url": "https://github.com/godaddy",
  "id": 1406546,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjE0MDY1NDY=",
  "organizations_url": "https://api.github.com/users/godaddy/orgs",
  "received_events_url": "https://api.github.com/users/godaddy/received_events",
  "repos_url": "https://api.github.com/users/godaddy/repos",
  "site_admin": false,
  "starred_url": "https://api.github.com/users/godaddy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/godaddy/subscriptions",
  "type": "Organization",
  "url": "https://api.github.com/users/godaddy",
  "user_view_type": "public",
};

describe("RepoOwnerProfile", () => {
  it("renders correctly", () => {
    render(<RepoOwnerProfile {...repoOwnerProfileData} />);
    const loginElement = screen.getByTestId("login");
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveTextContent(repoOwnerProfileData.login);
    
    const avatarUrlElement = screen.getByTestId("avatar_url");
    const imgElement = within(avatarUrlElement).getByRole('img'); // Get the img element within avatarUrlElement
    expect(avatarUrlElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", repoOwnerProfileData.avatar_url);

    const eventsUrlElement = screen.getByTestId("organizations_url");
    expect(eventsUrlElement).toBeInTheDocument();
    expect(eventsUrlElement).toHaveAttribute("href", repoOwnerProfileData.organizations_url);

    const followersUrlElement = screen.getByTestId("followers_url");
    expect(followersUrlElement).toBeInTheDocument();
    expect(followersUrlElement).toHaveAttribute("href", repoOwnerProfileData.followers_url);

    const reposUrlElement = screen.getByTestId("repos_url");
    expect(reposUrlElement).toBeInTheDocument();
    expect(reposUrlElement).toHaveAttribute("href", repoOwnerProfileData.repos_url);

    const gistsUrlElement = screen.getByTestId("gists_url");
    expect(gistsUrlElement).toBeInTheDocument();
    expect(gistsUrlElement).toHaveAttribute("href", repoOwnerProfileData.gists_url);
  });
});
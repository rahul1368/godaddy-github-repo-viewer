// src/context/RepoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  forks_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: false;
  };
  html_url: string;
  description: string;
  open_issues_count: number;

  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
}

interface RepoContextType {
  repos: Repo[];
  setRepos: React.Dispatch<React.SetStateAction<Repo[]>>;
}

const RepoContext = createContext<RepoContextType | undefined>(undefined);

export const RepoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  return (
    <RepoContext.Provider value={{ repos, setRepos }}>
      {children}
    </RepoContext.Provider>
  );
};

export const useRepo = () => {
  const context = useContext(RepoContext);
  if (!context) {
    throw new Error("useRepo must be used within a RepoProvider");
  }
  return context;
};

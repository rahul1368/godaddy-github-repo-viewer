import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { useRepo } from "../context/RepoContext";
import AppRepoDetails from "../components/RepoDetails";

const DetailView: React.FC<any> = () => {
  const { repoId } = useParams<{ repoId: any }>();
  const [loading, setLoading] = useState(true);
  const { repos } = useRepo();

  const repoDetails = useMemo<any>(() => {
    return repos?.find((repo: any) => repo.id === parseInt(repoId));
  }, [repoId, repos]);
  console.log("Params", repoId, repoDetails);

  useEffect(() => {
    if (repoDetails) {
      setLoading(false);
    }
  }, [repoDetails]);

  if (loading) return <Spin />;

  return (
    <div>
      <AppRepoDetails repo={repoDetails} />
    </div>
  );
};

export default DetailView;

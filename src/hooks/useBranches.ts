import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useBranches = (branchesUrl: string) => {
  const [branches, setBranches] = useState({
    list: [],
    loading: false,
    error: false,
    errorMessage: "",
  });

  const fetchBranches = useCallback(async () => {
    try {
      setBranches((state) => ({
        ...state,
        loading: true,
        error: false,
        errorMessage: "",
      }));

      const response = await axios.get(branchesUrl);
      console.log(response.data);

      setBranches((state) => ({
        ...state,
        list: response.data,
      }));
    } catch (error: any) {
      setBranches((state) => ({
        ...state,
        error: true,
        errorMessage: error.message || "An error occurred while fetching branches.",
      }));
    } finally {
      setBranches((state) => ({
        ...state,
        loading: false,
      }));
    }
  }, [branchesUrl]);

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);

  return branches;
};

export default useBranches;
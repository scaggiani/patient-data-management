import { useMemo } from "react";
import UseApiResult from "./UseApiResult";
import { getUsers } from "./Requests";

const UseUsers = () => {
  const request = useMemo(() => getUsers(), []);
  return UseApiResult(request);
};

export default UseUsers;

import { useMemo } from "react";
import UseApiResult from "./UseApiResult";
import { getPatients } from "./Requests";

const UsePatients = () => {
  const request = useMemo(() => getPatients(), []);
  return UseApiResult(request);
};

export default UsePatients;

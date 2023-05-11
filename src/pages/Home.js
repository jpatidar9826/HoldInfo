import React, { useEffect, useState } from "react";

import "./Home.css";
import HoldingTable from "../components/HoldingTable";
import LoadingSpinner from "../components/LoadingSpinner";
const Home = ({ themeDark }) => {
  const [loadedHoldings, setLoadedHoldings] = useState();
  const [loadSuccess, setLoadSuccess] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(`https://holdinfo-backend.onrender.com/api/holdings/`, requestOptions)
        .then(async (response) => {
          const responseData = await response.json();
          setLoadedHoldings(responseData);
          setLoadSuccess(true);
        })
        .catch((error) => console.log("error", error));
    };
    fetchUsers();
  }, [loadSuccess]);
  return (
    <React.Fragment>
      {loadSuccess ? (
        <HoldingTable items={loadedHoldings} themeDark={themeDark} />
      ) : (
        <div className="Loading">
          <LoadingSpinner />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;

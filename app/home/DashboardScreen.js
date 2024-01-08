import React, { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import IPOs from "./IPOs";

// DashboardScreen component responsible for fetching and displaying sector data
const DashboardScreen = () => {
  // State to store sector data and loading status
  const [sectorData, setSectorData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data from the API on component mount
  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_426dcba32a6848019e70d304cfadbf3f"
    )
      .then((response) => response.json())
      .then((data) => {
        // Set sector data and update loading status when data is fetched
        setSectorData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Log error and update loading status in case of fetch error
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  // Render loading indicator while data is being fetched
  if (loading) {
    return <ActivityIndicator />;
  }

  // Render Dashboard component with fetched sector data
  return (
    <ScrollView>
      <IPOs sectorData={sectorData} />
    </ScrollView>
  );
};

export default DashboardScreen;

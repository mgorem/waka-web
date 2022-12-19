import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { salesAgentData } from "data/agentData";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Agents = () => {
  const theme = useTheme();
  // const { data, isLoading } = useGetProductsQuery();
  const [agentsData, setAgentsData] = useState(salesAgentData);
  // console.log("Agents Data: ", agentsData);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="AGENTS" subtitle="List of Agents" />
      <Box>{/* <DataGrid rows={agentsData || []} columns={columns} /> */}</Box>
    </Box>
  );
};

export default Agents;

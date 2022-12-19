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

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "salesname",
      headerName: "NAME",
      flex: 0.5,
    },
    {
      field: "salesemail",
      headerName: "EMAIL",
      flex: 0.5,
    },
    {
      field: "salesidno",
      headerName: "NATIONAL ID",
      flex: 0.5,
    },
    {
      field: "salesphone",
      headerName: "PHONE",
      flex: 1,
    },
    {
      field: "isactive",
      headerName: "ACTIVE",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="AGENTS" subtitle="List of Agents" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.alt,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.id}
          rows={agentsData || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Agents;

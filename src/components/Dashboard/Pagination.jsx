import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({page, handlePageChange  }) {
  return (
    <div className="flex justify-center items-center mb-10">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
         page={page}
          onChange={handlePageChange}
          
      />
    </div>
  );
}
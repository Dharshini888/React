import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

const Reports = () => {
  const handleDownload = () => {
    // Logic to generate and download the report
    alert('Report generated and downloaded!');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5">Reports</Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>Download Report</Button>
    </Paper>
  );
};

export default Reports;

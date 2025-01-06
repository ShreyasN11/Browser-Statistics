import React from 'react';
import LeetCodeCalendar from 'leetcode-calendar'; // Assuming you're using a library like react-leetcode-calendar

const LeetCodeStatistics = () => {
  return (
    <div style={{ height: "85vh"}}>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          padding: "10px",
        }}
      >
        Leetcode Submissions Chart
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          padding: "10px",
        }}
      >
        <LeetCodeCalendar username="shreyasmnaik11" hideColorLegend="true" />
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "20px auto",
          padding: "10px",
        }}
      >
        
        <a
          href="https://leetcode.com/shreyasmnaik11"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          View My Profile →
        </a>

      </div>
    </div>
  );
};

export default LeetCodeStatistics;

import React from "react";

const TableComponent = ({ data }) => {
  const tableHeaderStyle = {
    padding: "10px",
    textAlign: "left",
  };

  const tableCellStyle = {
    padding: "10px",
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Submitted Data</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tableCellStyle}>{item.id}</td>
              <td style={tableCellStyle}>{item.title}</td>
              <td style={tableCellStyle}>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

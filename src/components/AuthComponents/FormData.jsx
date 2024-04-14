import React, { useState } from "react";
import TableComponent from "./TableComponent"; 

const FormData = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [submittedData, setSubmittedData] = useState([]); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setSubmittedData([...submittedData, data]); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "6%"  }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{
            marginBottom: "20px",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderBottom: "2px solid #007bff",
            borderRadius: "6px",
            width: "100%",
            boxSizing: "border-box",
            transition: "border-bottom-color 0.3s",
          }}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <textarea
          style={{
            marginBottom: "20px",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderBottom: "2px solid #007bff",
            borderRadius: "6px",
            width: "100%",
            boxSizing: "border-box",
            transition: "border-bottom-color 0.3s",
            resize: "vertical",
          }}
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          placeholder="Body"
          rows={4}
        />
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
            boxSizing: "border-box",
            transition: "background-color 0.3s",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
      <TableComponent data={submittedData} />
      </div>
    </div>
  );
};

export default FormData;

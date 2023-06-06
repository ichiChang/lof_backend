import React, { useEffect, useState } from "react";
import FoundService from "../services/FoundService";
import MyNavbar from "./MyNavBar";

const FoundComponent = () => {
  const [Founds, setFounds] = useState([]);

  useEffect(() => {
    FoundService.getFounds()
      .then((response) => {
        setFounds(response.data);
      })
      .catch((error) => {
        console.error("Error fetching found items:", error);
      });
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100vh",
      backgroundColor: "#FFFFF0",
    },
    table: {
      marginTop: "20px",
      width: "80%",
    },
    heading: {
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "50px",
      color: "#333",
      marginTop: "20px",
      marginBottom: "10px",
    },
  };

  return (
    <div>
      <MyNavbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Found Items List</h1>
        <table className="table table-striped" style={styles.table}>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Remark</th>
              <th>Last Seen Place</th>
              <th>Last Seen Date</th>
            </tr>
          </thead>
          <tbody>
            {Founds.map((found) => (
              <tr key={found.iid}>
                <td>{found.iid}</td>
                <td>{found.name}</td>
                <td>{found.type}</td>
                <td>{found.remark}</td>
                <td>
                  {found.lastSeenPlace.name}
                  {found.lastSeenPlace.floor}樓{found.lastSeenPlace.classroom}
                </td>
                <td>{found.lastSeenTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoundComponent;

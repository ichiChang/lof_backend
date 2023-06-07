import React, { useEffect, useState } from "react";
import FoundService from "../services/FoundService";
import MyNavbar from "./MyNavBar";
import CreateFoundItem from "./CreateFounditem";

const FoundComponent = () => {
  const [founds, setFounds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchFoundItems();
  }, []);

  const fetchFoundItems = () => {
    FoundService.getFounds()
      .then((data) => {
        setFounds(data);
      })
      .catch((error) => {
        console.error("Error fetching found items:", error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === "") {
      fetchFoundItems(); // Fetch all items when search bar is empty
    } else {
      FoundService.searchFoundItems(event.target.value.trim())
        .then((data) => {
          setFounds(data);
        })
        .catch((error) => {
          console.error("Error searching found items:", error);
        });
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: "100vh", // Changed height to minHeight
      backgroundColor: "#FFFFF0",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "20px",
    },
    card: {
      width: "25rem",
      height: "30rem",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardImage: {
      height: "60%",
      objectFit: "contain",
    },
    cardBody: {
      padding: "10px",
      height: "40%",
    },
    heading: {
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "50px",
      color: "#333",
      marginTop: "20px",
      marginBottom: "10px",
    },
    searchBarContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
    },
    searchInput: {
      borderRadius: "30px",
      padding: "10px",
      width: "500px",
      marginRight: "10px",
      border: "none",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div>
      <MyNavbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Found Items List</h1>

        <div style={styles.searchBarContainer}>
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div style={styles.cardContainer}>
          {founds.map((found) => (
            <div key={found.iid} className="card" style={styles.card}>
              {found.photo && (
                <img
                  src={found.photo}
                  className="card-img-top"
                  alt={found.name}
                  style={styles.cardImage}
                />
              )}
              <div className="card-body text-center" style={styles.cardBody}>
                <h5
                  className="card-title"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  {found.name}
                </h5>
                <p
                  className="card-text"
                  style={{ fontFamily: "Microsoft YaHei" }}
                >
                  {found.type}
                  <br />
                  {found.lastSeenPlace.name} {found.lastSeenPlace.floor}{" "}
                  {found.lastSeenPlace.classroom}
                  <br />
                  {found.lastSeenTime}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CreateFoundItem />
      </div>
    </div>
  );
};

export default FoundComponent;

import React, { useEffect, useState } from "react";
import FoundService from "../services/FoundService";
import MyNavbar from "./MyNavBar";
import CreateFoundItem from "./CreateFounditem";
import More from "../images/more.png";
import { Modal, Button } from "react-bootstrap";

const FoundComponent = () => {
  const [founds, setFounds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      fontFamily: "'Lalezar', cursive",
      fontSize: "64px",
      color: "#333",
      marginTop: "20px",
      marginBottom: "10px",
    },
    searchBarContainer: {
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      borderRadius: "30px",
      padding: "10px",
      width: "700px",
      height: "50px",
      marginRight: "10px",
      border: "solid",
      position: "relative", // 新增
      borderWidth: "2px",
      zIndex: 1, // 新增
    },
    moreButton: {
      cursor: "pointer",
      width: "115px",
      height: "55px",
      marginLeft: "30px",
      marginRight: "20px",
    },
    searchIndicator: {
      position: "absolute",
      bottom: "445px",
      right: "515px",
      width: "700px",
      height: "50px",
      backgroundColor: "#D4BBFF",
      borderRadius: "30px",
      border: "solid",
      borderWidth: "2px",
      zIndex: 0, // 新增
    },
  };

  return (
    <div>
      <MyNavbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Found List</h1>

        <div style={styles.searchBarContainer}>
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div style={styles.searchIndicator}></div>

          <img
            src={More}
            alt="More"
            style={styles.moreButton}
            onClick={handleShowModal}
          />

          <CreateFoundItem />
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
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>More Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/* Add additional content here */}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default FoundComponent;

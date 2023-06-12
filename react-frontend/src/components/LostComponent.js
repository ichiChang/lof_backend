import React, { useEffect, useState } from "react";
import LostService from "../services/LostService";
import CreateLostItem from "./CreateLostItem";
import MyNavbar from "./MyNavBar";
import More from "../images/more.png";
import { Modal, Button } from "react-bootstrap";

const LostComponent = () => {
  const [losts, setLosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false); // 新增状态

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setIsAnimated(true); // 设置动画状态为true，使元素滑入
    fetchLostItems();
  }, []);

  const fetchLostItems = () => {
    LostService.getLosts()
      .then((data) => {
        setLosts(data);
      })
      .catch((error) => {
        console.error("Error fetching lost items:", error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === "") {
      fetchLostItems(); // Fetch all items when search bar is empty
    } else {
      LostService.searchLostItems(event.target.value.trim())
        .then((data) => {
          setLosts(data);
        })
        .catch((error) => {
          console.error("Error searching lost items:", error);
        });
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowCategoryModal(false);
  };

  const handleShowCategoryModal = () => {
    setShowModal(false);
    setShowCategoryModal(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    LostService.getLostItemsByType(category)
      .then((data) => {
        setLosts(data);
      })
      .catch((error) => {
        console.error("Error fetching lost items by type:", error);
      });
    handleCloseModal();
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
      position: "relative", // 新增
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      fontFamily: "'Lalezar', cursive",
      fontSize: "18px",
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
      bottom: "calc(100% - 60px)", // 調整底部位置，具體數值根據你的需求調整
      right: "225px", // 調整右側位置，具體數值根據你的需求調整
      width: "700px",
      height: "50px",
      backgroundColor: "#D4BBFF",
      borderRadius: "30px",
      border: "solid",
      borderWidth: "2px",
      zIndex: 0,
    },
    animateContainer: {
      opacity: 0, // 默认隐藏元素
      transform: "translateY(100px)", // 初始位置在下方
      transition: "opacity 1s, transform 1s", // 过渡动画效果
    },

    animateContainerVisible: {
      opacity: 1, // 显示元素
      transform: "translateY(0)", // 移动到初始位置
    },
  };

  return (
    <div>
      <MyNavbar />
      <div
        style={{
          ...styles.animateContainer,
          ...(isAnimated && styles.animateContainerVisible),
        }}
      >
        <div style={styles.container}>
          <h1 style={styles.heading}>Lost List</h1>

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

            <CreateLostItem />
          </div>

          <div style={styles.cardContainer}>
            {losts.map((lost) => (
              <div key={lost.iid} className="card" style={styles.card}>
                {lost.photo && (
                  <img
                    src={lost.photo}
                    className="card-img-top"
                    alt={lost.name}
                    style={styles.cardImage}
                  />
                )}
                <div className="card-body text-center" style={styles.cardBody}>
                  <h5
                    className="card-title"
                    style={{ fontSize: "30px", fontWeight: "bold" }}
                  >
                    {lost.name}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Microsoft YaHei" }}
                  >
                    {lost.type}
                    <br />
                    {lost.pickUpPlace.name} {lost.pickUpPlace.floor}{" "}
                    {lost.pickUpPlace.classroom}
                    <br />
                    {lost.pick_up_time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="modal-dialog-centered modal-lg"
          >
            <Modal.Body
              style={{
                backgroundColor: "#FFFFF0",
                borderRadius: "40px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="secondary"
                  onClick={handleCloseModal}
                  style={{
                    borderRadius: "40px",
                    borderWidth: "4px",
                    borderColor: "black",
                    width: "450px",
                    height: "100px",
                    marginBottom: "50px",
                    fontFamily: "'Lalezar', cursive",
                    fontSize: "50px",
                    color: "black",
                    backgroundColor: "#FFA800",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform =
                      "translateY(10px) translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "none";
                  }}
                >
                  LOCATIONS
                </Button>
                <Button
                  variant="primary"
                  onClick={handleShowCategoryModal}
                  style={{
                    borderRadius: "40px",
                    borderWidth: "4px",
                    borderColor: "black",
                    width: "450px",
                    height: "100px",
                    fontFamily: "'Lalezar', cursive",
                    fontSize: "50px",
                    color: "black",
                    backgroundColor: "#80D1FF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform =
                      "translateY(10px) translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "none";
                  }}
                >
                  CATEGORIES
                </Button>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={showCategoryModal}
            onHide={handleCloseModal}
            dialogClassName="modal-dialog-centered modal-lg"
          >
            <Modal.Body
              style={{
                backgroundColor: "#FFFFF0",
                borderRadius: "40px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <Button
                    variant="secondary"
                    onClick={() => handleCategoryClick("Document")}
                    style={{
                      borderRadius: "40px",
                      borderWidth: "4px",
                      borderColor: "black",
                      width: "300px",
                      height: "100px",
                      marginBottom: "20px",
                      marginRight: "40px",
                      fontFamily: "'Lalezar', cursive",
                      fontSize: "50px",
                      color: "black",
                      backgroundColor: "#FFA800",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(10px) translateX(10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "none";
                    }}
                  >
                    Document
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleCategoryClick("Clothes")}
                    style={{
                      borderRadius: "40px",
                      borderWidth: "4px",
                      borderColor: "black",
                      width: "300px",
                      height: "100px",
                      marginBottom: "20px",
                      fontFamily: "'Lalezar', cursive",
                      fontSize: "50px",
                      color: "black",
                      backgroundColor: "#D4BBFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(10px) translateX(10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "none";
                    }}
                  >
                    Clothes
                  </Button>
                </div>
                <div style={{ display: "flex" }}>
                  <Button
                    variant="secondary"
                    onClick={() => handleCategoryClick("Accessories")}
                    style={{
                      borderRadius: "40px",
                      borderWidth: "4px",
                      borderColor: "black",
                      width: "300px",
                      height: "100px",
                      marginBottom: "0px",
                      marginRight: "40px",
                      fontFamily: "'Lalezar', cursive",
                      fontSize: "50px",
                      color: "black",
                      backgroundColor: "#80D1FF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(10px) translateX(10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "none";
                    }}
                  >
                    Accessories
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleCategoryClick("Others")}
                    style={{
                      borderRadius: "40px",
                      borderWidth: "4px",
                      borderColor: "black",
                      width: "300px",
                      height: "100px",
                      marginBottom: "0px",
                      fontFamily: "'Lalezar', cursive",
                      fontSize: "50px",
                      color: "black",
                      backgroundColor: "#FDDA0D",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(10px) translateX(10px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "none";
                    }}
                  >
                    Others
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default LostComponent;

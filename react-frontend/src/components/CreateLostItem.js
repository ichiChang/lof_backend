/* eslint-disable react/style-prop-object */
import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, Modal, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Plus from "../images/plus.svg";

const CreateLostItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control the visibility of the toast
  const toastRef = useRef(null); // Reference to the Bootstrap toast

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("Document");
  const [itemPhoto, setItemPhoto] = useState("");
  const [itemRemark, setItemRemark] = useState("");
  const [pickUpTime, setPickUpTime] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLineId, setUserLineId] = useState("");
  const [userFbUrl, setUserFbUrl] = useState("");
  const [pickUpPlaceName, setPickUpPlaceName] = useState("");
  const [pickUpPlaceFloor, setPickUpPlaceFloor] = useState("");
  const [pickUpPlaceClassroom, setPickUpPlaceClassroom] = useState("");
  const [nowPlaceName, setNowPlaceName] = useState("");
  const [nowPlaceFloor, setNowPlaceFloor] = useState("");
  const [nowPlaceClassroom, setNowPlaceClassroom] = useState("");

  const handlePickUpTimeChange = (date) => {
    const back = JSON.stringify(date);
    setPickUpTime(back.substring(0, 11));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      iid: 0,
      name: itemName,
      type: itemType,
      photo: itemPhoto,
      remark: itemRemark,
      pick_up_time: pickUpTime,
      postTime: "postTime",
      user: {
        uid: 0,
        name: userName,
        createDate: "",
        contact: {
          cid: 0,
          phone_number: userPhone,
          email: userEmail,
          line_id: userLineId,
          fb_url: userFbUrl,
        },
      },
      pickUpPlace: {
        pid: 0,
        name: pickUpPlaceName,
        floor: pickUpPlaceFloor,
        classroom: pickUpPlaceClassroom,
      },
      nowPlace: {
        pid: 0,
        name: nowPlaceName,
        floor: nowPlaceFloor,
        classroom: nowPlaceClassroom,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/itemonroads",
        itemData
      );
      console.log("Item created:", response.data);

      // Show the Bootstrap toast
      setShowToast(true);

      // 清空表单
      setItemName("");
      setItemType("");
      setItemPhoto("");
      setItemRemark("");
      setPickUpTime("");
      setUserName("");
      setUserPhone("");
      setUserEmail("");
      setUserLineId("");
      setUserFbUrl("");
      setPickUpPlaceName("");
      setPickUpPlaceFloor("");
      setPickUpPlaceClassroom("");
      setNowPlaceName("");
      setNowPlaceFloor("");
      setNowPlaceClassroom("");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };
  const handleToastClose = () => {
    setShowToast(false);
  };
  const handleSubmitAndClose = (e) => {
    handleSubmit(e);
    handleClose();
  };
  // Rest of your component code...

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          padding: 0,
          border: "none",
          background: "none",
          height: "55px",
          width: "55px",
          backgroundImage: `url(${Plus})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "39% 43%",
          backgroundSize: "160px 160px",
        }}
      ></Button>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Create Lost Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div class="container">
              <form>
                <div class="row">
                  <div class="col">
                    <div class="input-group">
                      <div class="preview-container">
                        {itemPhoto && (
                          <img
                            src={itemPhoto}
                            alt="Preview"
                            class="img-thumbnail"
                          />
                        )}
                      </div>
                      <input
                        type="file"
                        class="form-control"
                        id="itemPhoto"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const path = URL.createObjectURL(file);
                          setItemPhoto(path);
                        }}
                      />
                      <label class="input-group-text" for="itemPhoto">
                        <FontAwesomeIcon icon={faUpload} />
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    <label
                      htmlFor="itemName"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="itemName"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="itemType"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Type
                    </label>
                    <select
                      class="form-select"
                      id="itemType"
                      value={itemType}
                      onChange={(e) => setItemType(e.target.value)}
                    >
                      <option value="Document">Document</option>
                      <option value="Clothes">Clothes</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col">
                    <label
                      htmlFor="itemRemark"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Remark
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="itemRemark"
                      value={itemRemark}
                      onChange={(e) => setItemRemark(e.target.value)}
                    />
                  </div>
                  <div
                    className="col"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    <label htmlFor="pickUpTime">Pick Up Time</label>
                    <ReactDatetime
                      id="pickUpTime"
                      value={pickUpTime}
                      onChange={handlePickUpTimeChange}
                      inputProps={{
                        placeholder: "Pick Up Time",
                      }}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <label
                      htmlFor="userName"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="userPhone"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      User Phone
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userPhone"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="userEmail"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      User Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="userEmail"
                      placeholder="name@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <label
                      htmlFor="userLineId"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      User Line ID
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userLineId"
                      value={userLineId}
                      onChange={(e) => setUserLineId(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="userFbUrl"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      User Facebook URL
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userFbUrl"
                      value={userFbUrl}
                      onChange={(e) => setUserFbUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <label
                      htmlFor="pickUpPlaceName"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Pick Up Place
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="pickUpPlaceName"
                      value={pickUpPlaceName}
                      onChange={(e) => setPickUpPlaceName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="pickUpPlaceFloor"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Pick Up Place Floor
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="pickUpPlaceFloor"
                      value={pickUpPlaceFloor}
                      onChange={(e) => setPickUpPlaceFloor(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="pickUpPlaceClassroom"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Pick Up Place Classroom
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="pickUpPlaceClassroom"
                      value={pickUpPlaceClassroom}
                      onChange={(e) => setPickUpPlaceClassroom(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <label
                      htmlFor="nowPlaceName"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Now Place
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nowPlaceName"
                      value={nowPlaceName}
                      onChange={(e) => setNowPlaceName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="nowPlaceFloor"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Now Place Floor
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nowPlaceFloor"
                      value={nowPlaceFloor}
                      onChange={(e) => setNowPlaceFloor(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="nowPlaceClassroom"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Now Place Classroom
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nowPlaceClassroom"
                      value={nowPlaceClassroom}
                      onChange={(e) => setNowPlaceClassroom(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitAndClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        show={showToast}
        onClose={handleToastClose}
        ref={toastRef}
        delay={3000}
        autohide
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          minWidth: "200px",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>Item posted successfully!</Toast.Body>
      </Toast>
    </div>
  );
};
export default CreateLostItem;

import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, Modal, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const CreateFoundItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control the visibility of the toast
  const toastRef = useRef(null); // Reference to the Bootstrap toast

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("Document");
  const [itemPhoto, setItemPhoto] = useState("");
  const [itemRemark, setItemRemark] = useState("");
  const [itemLastSeenTime, setItemLastSeenTime] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLineId, setUserLineId] = useState("");
  const [userFbUrl, setUserFbUrl] = useState("");
  const [lastSeenPlaceName, setLastSeenPlaceName] = useState("");
  const [lastSeenPlaceFloor, setLastSeenPlaceFloor] = useState("");
  const [lastSeenPlaceClassroom, setLastSeenPlaceClassroom] = useState("");
  const handleLastSeenTime = (date) => {
    setItemLastSeenTime(date);
  };
  const CustomDatePickerInput = ({ value, onClick }) => (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={value}
        onClick={onClick}
        readOnly
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faCalendarAlt} />
        </button>
      </div>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      iid: 0,
      name: itemName,
      type: itemType,
      photo: itemPhoto,
      remark: itemRemark,
      pick_up_time: itemLastSeenTime,
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
      lastSeenPlace: {
        pid: 0,
        name: lastSeenPlaceName,
        floor: lastSeenPlaceFloor,
        classroom: lastSeenPlaceClassroom,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/itemtofinds",
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
      setItemLastSeenTime("");
      setUserName("");
      setUserPhone("");
      setUserEmail("");
      setUserLineId("");
      setUserFbUrl("");
      setLastSeenPlaceName("");
      setLastSeenPlaceFloor("");
      setLastSeenPlaceClassroom("");
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
      <Button variant="primary" onClick={handleShow}>
        新增物品
      </Button>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Create Found Item</Modal.Title>
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
                    <label htmlFor="itemLastSeenTime">Last Seen Time</label>
                    <DatePicker
                      id="lastSeenTime"
                      selected={itemLastSeenTime}
                      onChange={handleLastSeenTime}
                      dateFormat="yyyy-MM-dd"
                      customInput={<CustomDatePickerInput />}
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
                      htmlFor="lastSeenPlaceName"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Last Seen Place
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastSeenPlaceName"
                      value={lastSeenPlaceName}
                      onChange={(e) => setLastSeenPlaceName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="lastSeenPlaceFloor"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Last Seen Place Floor
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastSeenPlaceFloor"
                      value={lastSeenPlaceFloor}
                      onChange={(e) => setLastSeenPlaceFloor(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label
                      htmlFor="lastSeenPlaceClassroom"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      Last Seen Place Classroom
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastSeenPlaceClassroom"
                      value={lastSeenPlaceClassroom}
                      onChange={(e) =>
                        setLastSeenPlaceClassroom(e.target.value)
                      }
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
export default CreateFoundItem;

/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import axios from 'axios';

const CreateLostItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('');
  const [itemPhoto, setItemPhoto] = useState('');
  const [itemRemark, setItemRemark] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [postTime, setPostTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userLineId, setUserLineId] = useState('');
  const [userFbUrl, setUserFbUrl] = useState('');
  const [pickUpPlaceName, setPickUpPlaceName] = useState('');
  const [pickUpPlaceFloor, setPickUpPlaceFloor] = useState('');
  const [pickUpPlaceClassroom, setPickUpPlaceClassroom] = useState('');
  const [nowPlaceName, setNowPlaceName] = useState('');
  const [nowPlaceFloor, setNowPlaceFloor] = useState('');
  const [nowPlaceClassroom, setNowPlaceClassroom] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      iid: 0,
      name: itemName,
      type: itemType,
      photo: itemPhoto,
      remark: itemRemark,
      pick_up_time: pickUpTime,
      postTime: postTime,
      user: {
        uid: 0,
        name: userName,
        createDate: '',
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
      const response = await axios.post('http://localhost:8080/api/itemonroads', itemData);
      console.log('Item created:', response.data);
      // 清空表单
      setItemName('');
      setItemType('');
      setItemPhoto('');
      setItemRemark('');
      setPickUpTime('');
      setPostTime('');
      setUserName('');
      setUserPhone('');
      setUserEmail('');
      setUserLineId('');
      setUserFbUrl('');
      setPickUpPlaceName('');
      setPickUpPlaceFloor('');
      setPickUpPlaceClassroom('');
      setNowPlaceName('');
      setNowPlaceFloor('');
      setNowPlaceClassroom('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <h2>Create Lost Item</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </td>
              <td>
                <label>Type:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={itemType}
                  onChange={(e) => setItemType(e.target.value)}
                />
              </td>
              <td>
                <label>Photo:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={itemPhoto}
                  onChange={(e) => setItemPhoto(e.target.value)}
                />
              </td>
            </tr>
              
            
            <tr>
              <td>
                <label>Remark:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={itemRemark}
                  onChange={(e) => setItemRemark(e.target.value)}
                />
              </td>
              
              <td>
                <label>Pick Up Time:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={pickUpTime}
                  onChange={(e) => setPickUpTime(e.target.value)}
                />
              </td>
              <td>
                <label>Post Time:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={postTime}
                  onChange={(e) => setPostTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
            {/* 在每个<tr>之间添加空白行 */}
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label>User Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </td>
              <td>
                <label>User Phone:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </td>
              <td>
                <label>User Email:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </td>
              
            </tr>
            <tr>
              <td>
                <label>User Line ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userLineId}
                  onChange={(e) => setUserLineId(e.target.value)}
                />
              </td>
              
              <td>
                <label>User Facebook URL:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={userFbUrl}
                  onChange={(e) => setUserFbUrl(e.target.value)}
                />
              </td>
              
            </tr>
            <tr>
                {/* 在每个<tr>之间添加空白行 */}
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label>Pick Up Place Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={pickUpPlaceName}
                  onChange={(e) => setPickUpPlaceName(e.target.value)}
                />
              </td>
              <td>
                <label>Pick Up Place Floor:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={pickUpPlaceFloor}
                  onChange={(e) => setPickUpPlaceFloor(e.target.value)}
                />
              </td>
              <td>
                <label>Pick Up Place Classroom:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={pickUpPlaceClassroom}
                  onChange={(e) => setPickUpPlaceClassroom(e.target.value)}
                />
              </td>
            </tr>
            <tr>
                {/* 在每个<tr>之间添加空白行 */}
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <label>Now Place Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={nowPlaceName}
                  onChange={(e) => setNowPlaceName(e.target.value)}
                />
              </td>
              <td>
                <label>Now Place Floor:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={nowPlaceFloor}
                  onChange={(e) => setNowPlaceFloor(e.target.value)}
                />
              </td>
              <td>
                <label>Now Place Classroom:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={nowPlaceClassroom}
                  onChange={(e) => setNowPlaceClassroom(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateLostItem;

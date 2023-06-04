import React, { useEffect, useState } from 'react';
import LostService from '../services/LostService';
import CreateLostItem from './CreateLostItem';
import MyNavbar from './MyNavBar';
const LostComponent = () => {
  const [losts, setLosts] = useState([]);

  useEffect(() => {
    LostService.getLosts()
      .then(data => {
        setLosts(data);
      })
      .catch(error => {
        console.error('Error fetching lost items:', error);
      });
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      backgroundColor: '#FFFFF0',
    },
    table: {
      marginTop: '20px',
      width: '80%',
    },
    heading: {
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      fontWeight: 'bold',
      fontSize: '50px',
      color: '#333',
      marginTop: '20px',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      <MyNavbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Lost Items List</h1>
        <table className="table table-striped" style={styles.table}>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Remark</th>
              <th>Pick Up Place</th>
              <th>Date Lost</th>
            </tr>
          </thead>
          <tbody>
            {losts.map(lost => (
              <tr key={lost.iid}>
                <td>{lost.iid}</td>
                <td>{lost.name}</td>
                <td>{lost.type}</td>
                <td>{lost.remark}</td>
                <td>{lost.pickUpPlace.name}{lost.pickUpPlace.floor}樓{lost.pickUpPlace.classroom}</td>
                <td>{lost.pick_up_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <CreateLostItem />
      </div>
    </div>
  );
}

export default LostComponent;

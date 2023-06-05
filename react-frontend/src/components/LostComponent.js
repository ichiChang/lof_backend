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
      minHeight: '100vh', // Changed height to minHeight
      backgroundColor: '#FFFFF0',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '20px',
    },
    card: {
      width: '25rem',
      height: '30rem',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    cardImage: {
      height: '60%',
      objectFit: 'contain',
    },
    cardBody: {
      padding: '10px',
      height: '40%',
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
        <div style={styles.cardContainer}>
          {losts.map(lost => (
            <div key={lost.iid} className="card" style={styles.card}>
              {lost.photo && (
                <img src={lost.photo} className="card-img-top" alt={lost.name} style={styles.cardImage} />
              )}
              <div className="card-body text-center" style={styles.cardBody}>
                <h5 className="card-title" style={{ fontSize: '30px', fontWeight: 'bold' }}>{lost.name}</h5>
                <p className="card-text" style={{ fontFamily: 'Microsoft YaHei' }}>
                  {lost.type}<br />
                  {lost.pickUpPlace.name} {lost.pickUpPlace.floor}樓{lost.pickUpPlace.classroom}<br />
                  {lost.pick_up_time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CreateLostItem />
      </div>
    </div>
  );
}

export default LostComponent;

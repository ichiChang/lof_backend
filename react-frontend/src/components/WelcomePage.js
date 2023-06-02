import React from 'react';

const welcomePage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"89.5vh",
        backgroundColor:"#FFFFF0",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"black",fontFamily:"Microsoft JhengHei", fontWeight:"bold"}}>大家好</h1>
        </div>
    )
}

export default welcomePage;
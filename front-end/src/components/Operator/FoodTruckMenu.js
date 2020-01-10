import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import axiosWithAuth from '../axiosWithAuth'
import styled from "styled-components";

 function FoodTruckMenu(props) {
  const id = props.match.params.id
  const singleTruck = props.trucks.filter(t => t.id == id)
  const truck = singleTruck[0];

  const [menu, setMenu] = useState()

  useEffect(() => {
    axiosWithAuth()
        .post('/trucks/menu', {
            name: truck.name
        })
        .then(res => {
            setMenu(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
  }, [])

  return (
    <div>
      <img src={truck.imgUrl} />

      <div>Truck #: {truck.id}</div>
      <div>Truck Name: {truck.name}</div>
      <div>CuisineType: {truck.cuisineType}</div>
      <div>Customer Rating Average: {truck.customerRatingAvg} </div>

      <h2>Menu Items</h2>

      {menu && menu.map(item => { 
          return(
              <div>
         <p>Item Name: {item.itemName} </p>
          <p>Item Descrition: {item.itemDescription}</p>
          <p>Item Price: {item.itemPrice}</p>
          </div>
      )})}
    </div>
  );
}

const mapStateToProps = state => {
  return{
      trucks: state.operator.trucks
  }
}

export default connect(
  mapStateToProps,
  {}
)(FoodTruckMenu)

import React, { useEffect, useState } from "react";
import OperatorHeader from '../headers/OperatorHeader'
import { CardImg, MenuText, MenuH2, Body } from '../../styled-components'
import { connect } from 'react-redux'
import axiosWithAuth from '../axiosWithAuth'
import MenuModal from './MenuModal'

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

  console.log(menu)

  return (
    <>
    <OperatorHeader />
    <Body>
      <CardImg src={truck.imgUrl} />

      <MenuText>Truck #: {truck.id}</MenuText>
      <MenuText>Truck Name: {truck.name}</MenuText>
      <MenuText>CuisineType: {truck.cuisineType}</MenuText>
      <MenuText>Customer Rating Average: {truck.customerRatingAvg} </MenuText>

      <MenuModal id={id} setMenu={setMenu} name={truck.name} />

      <MenuH2>Menu Items</MenuH2>

      {menu && menu.map(item => { 
          return(
              <div>
         <MenuText>Item Name: {item.itemName} </MenuText>
          <MenuText>Item Descrition: {item.itemDescription}</MenuText>
          <MenuText>Item Price: {item.itemPrice}</MenuText>
          </div>
      )})}
    </Body>
    </>
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

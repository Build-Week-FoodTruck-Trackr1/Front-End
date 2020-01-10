import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import axiosWithAuth from '../axiosWithAuth'
import styled from "styled-components";
import MenuModal from './MenuModal'

const CardImg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
 
`;

const MenuText = styled.p`
  text-align:center;
 
`;
const MenuH2 = styled.h2`
  text-align:center;
 
`;


const Body = styled.div`
heigth: 100%;
background: #ECA564;
padding: 10px;
display:flex;
justify-content:center;
flex-direction:column;
`;

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

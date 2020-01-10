import styled from "styled-components";
import axiosWithAuth from "../axiosWithAuth";
import React, { useEffect, useState } from "react";
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TruckCard from "./TruckCard"
import OperatorHeader from '../headers/OperatorHeader'
import { fetchTrucks } from "../../actions";


const Body = styled.div`
height: 100vh;
background: #ECA564;
height: 100vh;
`;

const MyH2 = styled.h2`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold  
color: #e2e25a; 
font-family: 'Droid serif', serif; 
font-size: 3.6rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem;  
text-align: center;
margin: 0 0 12px;
`;
const MyH3 = styled.h3`
color: #232429; 
font-family: Nunito Sans
font-weight: Extra Bold
color: #e2e25a; 
font-family: 'Droid serif', serif; 
font-size: 3.6rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

const OperatorText = styled.p`
color: #fff; 
font-family: 'Droid serif', serif; 
font-size: 2.4rem; 
font-weight: 400; 
font-style: italic; 
line-height: 4.4rem; 
text-align: center;
margin 0 0 12px;
`;

const OperatorDashboard = props => {

  // const [trucks , setTrucks] = useState([]);


  useEffect(() => {
    props.fetchTrucks('/trucks/owned');
  }, []);

  if(props.isLoading) {
    return(
      <>
      <OperatorHeader />
      <Body>
        <Segment size='massive' color='red' inverted>
          <Dimmer active>
            <Loader size='medium' inline='centered' />
          </Dimmer>
        </Segment>
    </Body>
    </>
    )
  }

  else if(props.operator.trucks.length === 0) {
    return(
      <>
      <OperatorHeader />
      <Body>
        <MyH2>{props.operator.message}</MyH2>


        <MyH3> Your Trucks: </MyH3>
    
        <OperatorText>Click <Link id='operator-link' className='login-link' to='/operator/add-trucks'>here</Link> to add your trucks</OperatorText>
          



      </Body>
    </>
    )
  }

  
  return (
    <>
      <OperatorHeader />
      <Body>
        <MyH2>{props.operator.message}</MyH2>


        <MyH3> Your Trucks: </MyH3>
    
        {props.operator.trucks && props.operator.trucks.map(truck => { 
          return <TruckCard key={truck.id} truck={truck}/>
        })}
          



      </Body>
    </>
  );
}

const mapStateToProps = state => {
  return {
    operator: state.operator,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  {fetchTrucks}
)(OperatorDashboard)


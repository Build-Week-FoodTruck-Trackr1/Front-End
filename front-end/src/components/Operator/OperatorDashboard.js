import React, { useEffect } from "react";
import { OperatorBody, MyH2, MyH3, OperatorText } from '../../styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TruckCard from "./TruckCard"
import OperatorHeader from '../headers/OperatorHeader'
import { fetchOperatorTrucks } from "../../actions";

const OperatorDashboard = props => {

  useEffect(() => {
    props.fetchOperatorTrucks('/trucks/owned');
  }, []);

  
  return (
    <>
      <OperatorHeader />
      <OperatorBody>
        <MyH2>{props.operator.message}</MyH2>


        <MyH3> Your Trucks: </MyH3>

        {!props.operator.trucks && 
          <OperatorText>
          Click <Link id='operator-link' className='login-link' to='/operator/add-trucks'>here</Link> to add your trucks
          </OperatorText> 
        }
    
        {props.operator.trucks && props.operator.trucks.map(truck => { 
          return <TruckCard key={truck.id} truck={truck}/>
        })}

      </OperatorBody>
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
  {fetchOperatorTrucks}
)(OperatorDashboard)


import React, { useEffect } from 'react'
import { OperatorBody, MyH2, MyH3, OperatorText } from '../../styled-components'
import DinerHeader from '../headers/DinerHeader'
import DinerCard from '../User/DinerCard'
import { connect } from 'react-redux'
import { getYelpTrucks } from '../../actions'
import axios from 'axios'

const TruckList = props => {

    useEffect(() => {
        props.getYelpTrucks('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', props.diner.location)
    }, [])
    return(
        <>
        <DinerHeader />
        <OperatorBody>
        <MyH2>Viewing trucks in {props.diner.location}</MyH2>
    
        {props.foodTrucks && props.foodTrucks.map(truck => { 
          return <DinerCard key={truck.id} truck={truck}/>
        })}

      </OperatorBody>
    </>
    )
}

const mapStateToProps = state => {
    return{
        foodTrucks: state.foodTrucks,
        diner: state.diner
    }
}

export default connect(
    mapStateToProps,
    {getYelpTrucks}
)(TruckList)
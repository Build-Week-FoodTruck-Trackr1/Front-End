import React from 'react';
import { connect } from 'react-redux'

const TestMenu = props => {

    const id = props.match.params.id;
    console.log(id)

    const truck = props.trucks.filter(t =>  t.id == id);
    const truck1 = truck[0]
    console.log(truck1)

    console.log(truck)

    return(
        <div>
            Hi
        </div>
    )
}

const mapStateToProps = state => {
    return{
        trucks: state.operator.trucks
    }

}

export default connect(
    mapStateToProps,
    {}
)(TestMenu)
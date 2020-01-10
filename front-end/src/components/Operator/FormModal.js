import React, { useState } from 'react';
import { Modal, Form, Header } from 'semantic-ui-react'
import { fetchTrucks } from '../../actions'
import axiosWithAuth from '../axiosWithAuth';
import { connect } from 'react-redux';

export const FormModal = (props) => {

    const [truck, setTruck] = useState({...props.truck, imageUrl: ''})
    const [open, setOpen] = useState(false)

    const handleChanges = e => {
        setTruck({...truck, [e.target.name]: e.target.value})
    }

    const close = () => {
        setOpen(false)
    }

    const submitEdit = e => {
        // doesn't work when adding image url
        console.log(truck)
        e.preventDefault()
        axiosWithAuth()
            .put('/trucks', {
                ...truck,
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            props.fetchTrucks('/trucks/owned')
            close();
    }

    return(
        <Modal size='large' open={open} onClose={close} trigger={<p onClick={() => setOpen(true)}>Edit Truck</p>} closeOnDimmerClick={false} closeIcon>
            <Header>Edit Truck</Header>
            <Modal.Content>
            <Form size='massive'>
                    <Form.Input 
                    disabled
                    label='Truck Name' 
                    type='text' 
                    name='name' 
                    value={truck.name} 
                    onChange={handleChanges} 
                    />
                    <Form.Input
                    required
                    label='Image Url'
                    type='text'
                    value={truck.imageUrl}
                    name='imageUrl'
                    onChange={handleChanges}  
                    />
                    <Form.Input
                    required
                    label='Cuisine Type'
                    type='text'
                    value={truck.cuisineType}
                    name='cuisineType'
                    onChange={handleChanges}  
                    />
                    <p className='error'>{props.error}</p>
                     <Form.Group inline>
                         <Modal.Actions>
                            <Form.Button size='large' onClick={submitEdit}>Submit</Form.Button>
                        </Modal.Actions>
                    </Form.Group>
            </Form>
            </Modal.Content>
        </Modal>
    )
}



export default connect(
    null,
    {fetchTrucks}
)(FormModal)
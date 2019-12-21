import React from 'react'
import axiosWithAuth from '../components/axiosWithAuth'
import { connect } from 'react-redux'
import { userRegister } from '../actions'
import { FormContainer } from '../styled-components'
import { Form } from 'semantic-ui-react'
import { useInput } from '../components/hooks/useInput'

const SignupForm = props => {
    
    const [type, setType, handleType] = useInput('')
    const [email, setEmail, handleEmail] = useInput('')
    const [currentLocation, setCurrent, handleCurrent] = useInput('')
    const [username, setUsername, handleUsername] = useInput('')
    const [password, setPassword, handlePassword] = useInput('')

    const userRegister = e => {
        e.preventDefault()
        console.log(            
            username,
            password,
            email,
            currentLocation, 
            type.value,
            )
            props.userRegister({
                username,
                password,
                email,
                currentLocation, 
                type: type.value,
            })
            setType('')
            setEmail('')
            setCurrent('')
            setUsername('')
            setPassword('')
    }

    return(
        <FormContainer>
            <Form>
                    <Form.Select 
                    required
                    name='type'
                    label='User Type'
                    options={props.options}
                    placeholder='User Type'
                    value={type.value}
                    onChange={(e, {value}) => handleType({value})}
                    />
                    <Form.Input 
                    required
                    label='Username' 
                    type='text' 
                    name='username' 
                    value={username} 
                    onChange={e => handleUsername(e.target.value)} 
                    />
                    <Form.Input
                    required
                    label='Email'
                    type='email'
                    value={email}
                    name='email'
                    onChange={e => handleEmail(e.target.value)}  
                    />
                    <Form.Input
                    required
                    label='Password'
                    type='text'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                    <Form.Input
                    required
                    label='Current Location'
                    type='text'
                    value={currentLocation}
                    name='current'
                    onChange={e => handleCurrent(e.target.value)}  
                    />
                    <Form.Button onClick={userRegister}>Submit</Form.Button>
            </Form>
        </FormContainer>
    )
}

const mapStateToProps = state => {
    return {
        options: state.options
    }
}

export default connect(
    mapStateToProps,
    { userRegister }
)(SignupForm)
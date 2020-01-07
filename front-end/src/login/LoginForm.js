import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { userLogin } from '../actions'
import {useInput} from '../components/hooks/useInput'
import { FormContainer } from '../styled-components';

const LoginForm = props => {

    const [type, setType, handleType] = useInput('')
    const [username, setUsername, handleUsername] = useInput('')
    const [password, setPassword, handlePassword] = useInput('')

    const userLogin = e => {
        e.preventDefault()
        localStorage.setItem('type', type.value)
        props.userLogin({
            username,
            password,
            type: type.value
        })
        setType('')
        setUsername('')
        setPassword('')
    }
    return(
        <FormContainer>
            <Form inverted>
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
                    label='Password'
                    type='password'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                     <Form.Group inline>
                        <Form.Button onClick={userLogin}>Submit</Form.Button>
                        <Link className='login-link' to='/register'>Register</Link>
                    </Form.Group>
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
 {userLogin}
)(LoginForm)
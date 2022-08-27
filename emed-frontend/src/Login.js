import React from 'react';
import {Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import Garage from "./Garage";


const Login = ({userDetails, error, inputChangeHandler, onSubmit}) => {

  return (
      <>
        <Row>

          <h1>EMed</h1>

          <Row>
            <Col sm={4} smOffset={4}>

              {error ? <p className="alert alert-danger">{error} </p> : null}

              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <p>Login</p >
                  <FormControl type='text' name='username' placeholder='Username'
                               value={userDetails.username}
                               onChange={inputChangeHandler}/>
                  <FormControl type='password' name='password' placeholder='Password'
                               value={userDetails.password}
                               onChange={inputChangeHandler}/>
                </FormGroup>
                <FormGroup>
                  <Button bsStyle="success" type="submit">Login</Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Row>
        <Garage/>
      </>

  );
};

export default Login;
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
          <Form style={{textAlign:'left', marginTop: '30px', display: 'flex', flexDirection:"column", alignItems: 'space-around', flexBasis:'0'}}>
        <FormGroup>
          <Label for="exampleEmail">Names</Label>
          <Input type="name" name="name" id="name" placeholder="john doe" />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phonenumber</Label>
          <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="081xxxxxxx" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <Button>Register</Button>
      </Form>
          </Col>
          <Col></Col>
        </Row>
      
      </Container>
    );
  }
}
import React from 'react';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
 

const OrderForm = () => {
    return(  
<>
 
 <Form>
      <FormGroup row>
        <Label for="Name Input" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="input" id="name" placeholder="Yourname" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="size" sm={2}>Pizza Size</Label>
        <Col sm={10}>
          <Input type="select" name="Pizza Size" id="PizzaSize">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
     
      <FormGroup row>
        <Label for="specialInstructions" sm={2}>Special Instructions</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
    
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Checkbox</Label>
        <Col sm={{ size: 10}}>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bacon
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Peppers
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Olives
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Pepperoni
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
   
     
</> 

    );

}
 
export default OrderForm;
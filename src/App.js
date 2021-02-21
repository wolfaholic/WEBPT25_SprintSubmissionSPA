// Imports //
import React from "react";
import "./styles/index.css";
import { MainDiv, NavDiv, NavHeader, HeroDiv, HeroText, ButtonLinks, PizzaButton, TopCards, CardText, CardBox, BottomCards, Footer } from "./styles/styled-components";
import OrderForm from "./components/Form.js"
import { Route } from "react-router-dom";
import "./components/Form"


// App
export default function App() {
    return ( 
       <MainDiv>
            <NavDiv>
                <NavHeader>Lambda Eats</NavHeader>
                <ButtonLinks exact to={"/"}>Home</ButtonLinks> 
            </NavDiv>
        <Route exact path='/'>
            <HeroDiv>
                     <div className="Logo"> 
                        <HeroText>Your favorite food while coding</HeroText>
                         
                        <PizzaButton to={"/pizza"}>
                          Want Pizza? I want Pizza!
                        </PizzaButton> 
                      
                    </div>
                    
            </HeroDiv>

            <TopCards>
                    <CardText>Best Food Deliver for those late night pushes!</CardText>
                    <CardBox>
                        <div>
                        <button>McDonalds</button> 
                        </div>
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Taco Bell</button> 
                        </div>    
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Subway</button> 
                        </div>
                    </CardBox>

            </TopCards>
            <BottomCards>
                    <CardText>Best Food Deliver for those late night pushes!</CardText>
                    <CardBox>
                        <div>
                        <button>McDonalds</button> 
                        </div>
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Taco Bell</button> 
                        </div>    
                    </CardBox>
                    <CardBox>
                        <div>
                        <button>Subway</button> 
                        </div>
                    </CardBox>

            </BottomCards>
        </Route>
        <Route path='/pizza'>
          <OrderForm /> 
        </Route>
        
        <Footer>
                <p>Copyright 2021 - WebPT25</p>
            </Footer>
          
       
            
        

        </MainDiv>

     
    );
}



import React from "react";
import {CardGroup,Card,Button} from 'react-bootstrap'
import cafe from '../images/Servic/cafe.png'
import grocery from  '../images/Servic/grocery.png'
import library from '../images/Servic/library.png'
import pharmacy from '../images/Servic/pharmacy.png'
import restaurant from '../images/Servic/restaurant.png'

function Services() {
  let Services={
    serviece1:{
      img:cafe,
      name:"Cafe",
    },
    serviece2:{
        img:grocery,
        name:"Grocery",
      },
      serviece3:{
        img:library,
        name:"Library",
    },
    serviece4:{
        img:pharmacy,
        name:"Pharmacy",
    },
    serviece5:{
      img:restaurant,
      name:"Restaurant",
  }
  }
  return (
    <div>
      <h1 className="title">Our Services</h1>
      <br />
      <CardGroup>
        <Card>
        <div className="containerOfStaff">
        {Object.values(Services).map((value) => {
            return (
        <div className="cardOfStaff">
                <div className="imageBox">
                    <img src={value.img} width="260" height="260"/>
                </div>
                <div className="contentStaff">
                    <h2> {value.name} </h2>
                    <br/>
                    <p>
                    <Button href="#" variant="warning">See All</Button>{' '}
                    </p>
                </div>
            </div>
             );
            })}
            </div>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Services;

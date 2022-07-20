import React from 'react'
import {CardGroup,Card} from 'react-bootstrap'
import member1 from '../images/Members/member1.png'
import member2 from '../images/Members/member2.png'
import member3 from '../images/Members/member3.png'
import member4 from '../images/Members/member4.png'
import member5 from '../images/Members/member5.png'
import member6 from '../images/Members/member6.png'
import member7 from '../images/Members/member7.png'
import member8 from '../images/Members/member8.png'

function Members() {
    let members={
        member1:{
          img:member1,
          name:"Raghad",
          collage:"College of Computing and Information Technology"
        },
        member2:{
            img:member2,
            name:"Heba",
            collage:"College of Engineering"
          },
        member3:{
            img:member3,
            name:"Fatimah",
            collage:"College of Science"
        },
        member4:{
            img:member4,
            name:"Rawan",
            collage:"College of Law"
        },
        member5:{
            img:member5,
            name:"Amal",
            collage:"College of Communication and Media"
        },
        member6:{
            img:member6,
            name:"Shahad",
            collage:"College of Computing and Information Technology"
        },
        member7:{
            img:member7,
            name:"Abeer",
            collage:"College of Law"
        },
        member8:{
            img:member8,
            name:"Atheer",
            collage:"College of Science"
        }
      }
  return (
    <>
    <br/>
    <h1 className="title">Our Members</h1><br/>
        <CardGroup>
      <Card>
      <div className="center">
      <div className="card-group">
      {Object.values(members).map((value) => {
            return (
      <div className="property-card">
                <a href="#">
                  <div className="property-image"
                   style={{ backgroundImage: `url(${value.img})` }}>
                    <div className="property-image-title"></div>
                  </div>
                </a>
                <div className="property-description">
                    <br/>
                  <h4>{value.name}</h4><br/>
                  <p>{value.collage}</p>
                </div>
              </div>
               );
            })}
            </div>
            </div>
      </Card>
    </CardGroup>
    </>
  )
}

export default Members
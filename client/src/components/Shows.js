import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class Shows extends Component {
  state = {
    items: [
      {
        _id: "5bdf5845fb6fc074abb702af",
        title: "Pizza Factory",
        day: "Sunday",
        start: "8:00 PM",
        end: "10:00 PM",
        address: "3039 Meridian Ave #44, San Jose, CA 95124, United States",
        warnings: {
          clean: false,
          runslate: false,
          mixed: false,
          presignup: true,
          presignupmand: false,
          prebooked: false
        },
        schedule: "Weekly",
        hosts: ["PX Floro", "Calvin Haha"],
        notes: "Produced and hosted by PX Floro, featuring Calvin Haha."
      },
      {
        _id: "5bdf58e6fb6fc074abb7030d",
        title: "Poor House Bistro",
        day: "Monday",
        start: "6:00 PM",
        end: "9:00 PM",
        address: "91 S Autumn St, San Jose, CA 95110, USA",
        warnings: {
          clean: true,
          runslate: false,
          mixed: false,
          presignup: false,
          presignupmand: false,
          prebooked: false
        },
        schedule: "weekly",
        hosts: [
          "Dave Allender",
          "Cap Wilhelm-Safian",
          "Ian Davis",
          "Steph Frazier"
        ],
        notes:
          "6 pm signup during 30-minute opening music. Good food and drinks."
      }
    ]
  };
  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          type="submit"
          color="dark"
          className="mb-2"
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name: name }]
              }));
            }
          }}
        >
          Add Items
        </Button>
        <ListGroup className="showList">
          {items.map(el => {
            return (
              <div className="mb-1 ">
                <h1>{el.title}</h1>
                <div>Presented by: {el.hosts.join(", ")}</div>
                <div>
                  {el.start} - {el.end} on {el.day}s ({el.schedule})
                </div>
                <div>
                  {Object.keys(el.warnings).map(warning => {
                    console.log(el.warnings[warning]);
                    if (el.warnings[warning]) {
                      console.log(el.warnings[warning]);
                      return <div>{warning}</div>;
                    }
                  })}
                </div>
                <div>{el.address}</div>
                <div>{el.notes}</div>
              </div>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

export default Shows;

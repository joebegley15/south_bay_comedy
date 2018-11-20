import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class Shows extends Component {
  state = {
    items: [
      {
        id: uuid(),
        title: "Pizza Factory",
        day: "Sunday",
        start: "8:00 PM",
        end: "10:00 PM",
        address: "3039 Meridian Ave #44, San Jose, CA 95124, United States",
        warnings: {
          clean: { val: false, message: "Clean show" },
          runslate: { val: false, message: "Runs late" },
          mixed: {
            val: false,
            message: "Mixed mic. Musicians and poets welcome."
          },
          presignup: { val: true, message: "Online signup available" },
          presignupmand: { val: false, message: "Must sign up in advance" },
          prebooked: { val: false, message: "Booked in advnce" }
        },
        schedule: "Weekly",
        hosts: ["PX Floro", "Calvin Haha"],
        notes: "Produced and hosted by PX Floro, featuring Calvin Haha."
      },
      {
        id: uuid(),
        title: "Poor House Bistro",
        day: "Monday",
        start: "6:00 PM",
        end: "9:00 PM",
        address: "91 S Autumn St, San Jose, CA 95110, USA",
        warnings: {
          clean: { val: true, message: "Clean show" },
          runslate: { val: false, message: "Runs late" },
          mixed: {
            val: false,
            message: "Mixed mic. Musicians and poets welcome."
          },
          presignup: { val: false, message: "Online signup available" },
          presignupmand: { val: false, message: "Must sign up in advance" },
          prebooked: { val: false, message: "Booked in advnce" }
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
    console.log("rendered");
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
        <ListGroup>
          <TransitionGroup className="showList">
            {items.map(el => {
              return (
                <div className="mb-1 ">
                  <h1>{el.title}</h1>
                  <div>
                    Presented by: {el.hosts ? el.hosts.join(", ") : null}
                  </div>
                  <div>
                    {el.start} - {el.end} on {el.day}s ({el.schedule})
                  </div>
                  <div>
                    {Object.keys(el.warnings).map(elWarning => {
                      if (el.warnings[elWarning].val) {
                        return <div>{el.warnings[elWarning].message}</div>;
                      }
                    })}
                  </div>
                  <div>{el.address}</div>
                  <div>{el.notes}</div>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id != el.id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                </div>
              );
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default Shows;

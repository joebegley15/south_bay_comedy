import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getShows } from "../actions/showActions";
import PropTypes from "prop-types";

class Shows extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  render() {
    console.log("rendered");
    const { shows } = this.props.show;
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
            {shows.map(el => {
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

Shows.PropTypes = {
  getItems: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  show: state.show
});

export default connect(
  mapStateToProps,
  { getShows }
)(Shows);

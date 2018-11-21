import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getShows, deleteShow } from "../actions/showActions";
import PropTypes from "prop-types";

class Shows extends Component {
  componentDidMount() {
    this.props.getShows();
  }

  onDeleteClick = id => {
    this.props.deleteShow(id);
  };
  render() {
    const { shows } = this.props.show;
    console.log(shows);
    return (
      <Container>
        {shows.map(el => {
          return (
            <div className="mb-1 ">
              <h1>{el.title}</h1>
              <div>Presented by: {el.hosts ? el.hosts.join(", ") : null}</div>
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
                onClick={this.onDeleteClick.bind(this, el.id)}
              >
                &times;
              </Button>
            </div>
          );
        })}
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
  { getShows, deleteShow }
)(Shows);

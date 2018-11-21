import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={this.toggle}
      >
        Add Item
      </Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle} />
      </Modal>
    </div>;
  }
}

export default ItemModal;

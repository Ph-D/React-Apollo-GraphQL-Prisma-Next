import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    price: 0
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;

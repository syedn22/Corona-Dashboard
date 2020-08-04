import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  renderInput  ({ name, label, type = "text" }) {
    const { data, errors } = this.state;
    return (
      <div class="form-group">
        <label for={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={label}
        />
      </div>
    );
  };
}

export default Form;

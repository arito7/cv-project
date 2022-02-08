import React from 'react';
import './SectionField.css';

export default class SectionField extends React.Component {
  render() {
    const { field } = this.props;
    return (
      <div className="section-field">
        <label htmlFor={field.name}>{field.name}</label>
        <input
          id={field.name}
          type={field.type}
          placeholder={field.placeholder}
        ></input>
      </div>
    );
  }
}

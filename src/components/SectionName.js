import React from 'react';
import './SectionName.css';

export default class SectionName extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="section-name">
        <h3 className="title">{name}</h3>
        <hr />
      </div>
    );
  }
}

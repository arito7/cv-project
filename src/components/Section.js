import React from 'react';
import SectionName from './SectionName';
import SectionFieldSet from './SectionFieldSet';
import './Section.css';
import uniqid from 'uniqid';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.section = this.props.section;
    this.state = {
      fieldSets: [this.createFieldSet(false)],
    };
    this.addFieldSet = this.addFieldSet.bind(this);
    this.createFieldSet = this.createFieldSet.bind(this);
    this.fieldSetDeleteHandler = this.fieldSetDeleteHandler.bind(this);
  }

  fieldSetDeleteHandler(id) {
    const temp = this.state.fieldSets.filter((fieldSet) => {
      return fieldSet.props.id !== id;
    });
    this.setState({
      fieldSets: temp,
    });
  }

  createFieldSet(removable = true) {
    return (
      <SectionFieldSet
        fields={this.section.fields}
        removable={removable}
        removeHandler={this.fieldSetDeleteHandler}
        id={uniqid()}
      />
    );
  }

  addFieldSet() {
    this.setState({
      fieldSets: this.state.fieldSets.concat(this.createFieldSet()),
    });
  }
  render() {
    return (
      <form className="section">
        <SectionName name={this.section.name} />
        {this.state.fieldSets}
        {(() => {
          if (this.section.expandable) {
            return (
              <button className="add" type="button" onClick={this.addFieldSet}>
                Add
              </button>
            );
          }
        })()}
      </form>
    );
  }
}

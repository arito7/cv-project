import React from 'react';
import SectionField from './SectionField';
import './SectionFieldSet.css';

export default class SectionFieldSet extends React.Component {
  constructor(props) {
    super(props);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
    this.state = {
      fieldSetClasses: ['field-set'],
    };
    this.deleteBtn = (
      <button
        type="button"
        onClick={() => {
          this.props.removeHandler(this.props.id);
        }}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        Remove
      </button>
    );
  }

  mouseEnterHandler() {
    this.setState({
      fieldSetClasses: this.state.fieldSetClasses.concat('highlight'),
    });
  }
  mouseLeaveHandler() {
    this.setState({
      fieldSetClasses: this.state.fieldSetClasses.slice(0, 1),
    });
  }
  render() {
    const { fields } = this.props;
    return (
      <div className={this.state.fieldSetClasses.join(' ')}>
        <ul className="fields">
          {fields.map((field) => (
            <SectionField field={field} key={field.name} />
          ))}
        </ul>
        {(() => {
          if (this.props.removable) {
            return this.deleteBtn;
          }
        })()}
      </div>
    );
  }
}

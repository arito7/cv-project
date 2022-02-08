import React from 'react';
import Section from './components/Section';
import './styles/styles.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.sections = [
      {
        name: 'General Info',
        fields: [
          fieldFactory('First Name', 'text'),
          fieldFactory('Last Name', 'text'),
          fieldFactory('Address', 'text'),
          fieldFactory('Email', 'email'),
          fieldFactory('Phone', 'text'),
        ],
        expandable: false,
      },
      {
        name: 'Education',
        fields: [
          fieldFactory('Name of Institution', 'text'),
          fieldFactory('Major/Area of Study', 'text'),
          fieldFactory('From', 'date'),
          fieldFactory('To', 'date'),
        ],
        expandable: true,
      },
      {
        name: 'Job Experience',
        fields: [
          fieldFactory('Company Name', 'text'),
          fieldFactory('Position/Title', 'text'),
          fieldFactory('Job Description', 'text'),
          fieldFactory('From', 'date'),
          fieldFactory('To', 'date'),
        ],
        expandable: true,
      },
    ];
  }

  render() {
    return (
      <div className="app">
        {this.sections.map((section) => {
          return <Section section={section} />;
        })}
      </div>
    );
  }
}

function fieldFactory(name, type) {
  return { name, type };
}

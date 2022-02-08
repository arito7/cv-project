import React from 'react';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/styles.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.sections = [
      {
        name: 'General Info',
        fields: [
          fieldFactory('First Name', 'text', 'Mary'),
          fieldFactory('Last Name', 'text', 'Jane'),
          fieldFactory(
            'Address',
            'text',
            '1111 SuperMac Dr, Anchorage, Alaska, 12345'
          ),
          fieldFactory('Email', 'email', 'example@example.com'),
          fieldFactory('Phone', 'text', '111-222-3333'),
        ],
        expandable: false,
      },
      {
        name: 'Education',
        fields: [
          fieldFactory('Name of Institution', 'text', 'Institute of Techno'),
          fieldFactory('Major/Area of Study', 'text', 'Computer Science'),
          fieldFactory('From', 'text', 'March 2015'),
          fieldFactory('To', 'text', 'March 2019'),
        ],
        expandable: true,
      },
      {
        name: 'Job Experience',
        fields: [
          fieldFactory('Company Name', 'text', 'McDonalds'),
          fieldFactory('Position/Title', 'text', 'Burger Flipper'),
          fieldFactory('Job Description', 'text', 'Flip Burgers'),
          fieldFactory('From', 'text', 'March 2019'),
          fieldFactory('To', 'text', 'Current'),
        ],
        expandable: true,
      },
      {
        name: 'Skills and Competencies',
        fields: [fieldFactory('Skill', 'text', 'Financial Structures')],
        expandable: true,
      },
      {
        name: 'Languages',
        fields: [fieldFactory('Language', 'text', 'Spanish')],
        expandable: true,
      },
    ];
  }

  render() {
    return (
      <div className="app">
        <Header />
        {this.sections.map((section) => {
          return <Section section={section} />;
        })}
        <Footer />
      </div>
    );
  }
}

function fieldFactory(name, type, placeholder = 'example') {
  return { name, type, placeholder };
}

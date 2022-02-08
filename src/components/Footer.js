import React from 'react';
import './Footer.css';
import GithubIcon from '../imgs/GitHub-Mark-Light-32px.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span>Copyright &#169; 2022 arito7</span>
        <a href="https://github.com/arito7/arito7">
          <img src={GithubIcon}></img>
        </a>
      </div>
    );
  }
}

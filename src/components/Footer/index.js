import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          {' '}
          Written by <a href="http://evanyou.me">Evan You</a>
        </p>
        <p>
          {' '}
          Edited by <a href="https://ltv.vn">Luc Duong</a>
        </p>
        <p>
          {' '}
          From{' '}
          <a data-v-fdb56dc8="" href="https://gitlab.com/ltv/c/beginnerjs">
            BeginnerJs
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import './AutoComplete.css';

class AutoComplete extends Component {

  constructor(props) {
    super(props)
    this.state = {
        hideOptions: true,
        inputValue: '',
        possibleItems: []
    }
  }


  componentDidMount() {
    if(this.props.name) {
      for(let i=0; i<document.querySelectorAll(`div[name='${this.props.name}']>input`).length; i++) {
        document.querySelectorAll(`div[name='${this.props.name}']>input`)[i].oninput = this.hundleChange.bind(this);
      }
    }
    else {
      for(let i=0; i<document.querySelectorAll(`div[name='autocomplete']>input`).length; i++) {
        document.querySelectorAll(`div[name='autocomplete']>input`)[i].oninput = this.hundleChange.bind(this);
      }
    }
    
  }

  hundleChange(e) {
    if(e.target.value == '') {
      this.setState((prevState) => {
        return {
          ...prevState,
          hideOptions: true,
          inputValue: e.target.value,
          possibleItems: []
        }
      })
    }
    else {
      let updateList = this.props.items.filter( item => item.startsWith(e.target.value));
      this.setState((prevState) => {
        return {
          ...prevState,
          hideOptions: updateList.length>0 ? (false) : (true),
          inputValue: e.target.value,
          possibleItems: updateList
        }
      })
    }
  }

  itemSelected(e) {
    let selected = e.target.innerText;
    let updateList = this.props.items.filter( item => item.startsWith(selected));
    for(let i=0; i<document.getElementsByTagName('input').length; i++) {
      document.getElementsByTagName('input')[i].value = selected;
    }
    this.setState((prevState) => {
      debugger;
      return {
        ...prevState,
        hideOptions: updateList.length>0 ? (false) : (true),
        inputValue: selected,
        possibleItems: updateList
      }
    })
  }

  render() {
    return (
      <div name={this.props.name || 'autocomplete'}>
        {/* input elements */}
        {this.props.children}

        {/* options list */}
        <ul hidden={this.state.hideOptions}>
          {
            this.state.possibleItems.map((item) => {
              return (<li onClick={this.itemSelected.bind(this)}><b>{this.state.inputValue}</b>{item.slice(this.state.inputValue.length, item.length)}</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
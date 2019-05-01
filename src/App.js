import React, { Component } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';

const countries = [
  'israel',
  'italy',
  'germany',
  'spain',
  'greece'
]

const names = [
  'ido',
  'yogev',
  'lian',
  'ilan',
  'tomer'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AutoComplete items={names}>
          <div>
            <label for='inp'>Auto Names</label>
          </div>
          <input name='inp' type='text' placeholder='try autocomplete'  />
        </AutoComplete> */}

        <AutoComplete 
          name='countries' 
          items={countries}
        >
          <div>
            <label for='inp'>Auto Countries</label>
          </div>
          <input name='inp' type='text' placeholder='try autocomplete'  />
        </AutoComplete>

        <AutoComplete name='names' items={names}>
          <div>
            <label for='inp'>Auto Names</label>
          </div>
          <input name='inp' type='text' placeholder='try autocomplete'  />
        </AutoComplete>
      </div>
    );
  }
}

export default App;

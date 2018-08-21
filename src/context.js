import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    default:
    return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "Jimmy Hamster",
        email: "jimmy@hamster.com",
        phone: "555-555-5555"
      },
      {
        id: "2",
        name: "Donna Skunk",
        email: "donna@skunky.com",
        phone: "445-555-6352"
      },
      {
        id: "3",
        name: "Siesel Jacobs",
        email: "Siesel@jacobs.com",
        phone: "675-555-5555"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
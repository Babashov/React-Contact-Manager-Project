import React,{Component} from 'react';

const Context = React.createContext();

const reducer = (state,action) => {

  switch(action.type)
  {
    case 'DELETE_CONTACT':
    return {
      ...state,
      contacts:state.contacts.filter(contact=>{
        return contact.id !== action.payload;
        
      })
      
    }    

    default:
    return state;

  }
}


export class Provider extends Component 
{
  state = {    
    contacts:[
      {
        id:1,
        name:'Mahammad Babashov',
        email:'m@babashov.info',
        phone:'555-555-5555'
      },
      {
        id:2,
        name:'Ehmed Babashov',
        email:'e@babashov.info',
        phone:'111-111-1111'
      },
      {
        id:3,
        name:'Mushviq Asadov',
        email:'a@babashov.info',
        phone:'333-333-3333'
      }
    ],

    dispatch:action=>{
      this.setState(state=>reducer(state,action));
    }
  }

  render()
  {
    return (
      <Context.Provider value={this.state}>
      
        {this.props.children}

      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
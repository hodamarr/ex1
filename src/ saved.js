import logo from './logo.svg';
import './App.css';
import AddChat from './AddChat/AddChat';
import Contacts from './contacts/Contacts';
import { render } from '@testing-library/react';
import { initialPassowrdsAndUsernames } from './InitialProps';
import React from 'react';

example = [{
  userName: 'hod_amar@gmail.com',
  password: 'hodaya_hazona'
}]
class App extends React.Component {

  props  = {
    userNamesAndPasswords: initialPassowrdsAndUsernames}
  }
  state = {
    isLoggedIn: false,
    messages: []
  }

  checkValidUser = (userName, password) => {
    isValid = this.props.find((ob) => ob.userName == userName && ob.password == password) >= 0
    if (isValid) {
      this.setState({isLoggedIn: true})
    } else {
      return false
    }
  }

  render() {
    const {state} = this
    return isLoggedIn ? <LoginScreen/> : <LoggedInApp/>
  }
}

onClickButton = () => {
  val = this.props.checkValidUser(state.userName, state.password) // None - > logged in, False -> invalid user
  if (val == undefined) {
    return;
  } else {
    this.setState({displayError: true})
  }
}

function App() {

  state: {
    isLoggedIn: False
  }
      
  const contact_list = [ {who : 'hod', last_seen:'14.4 20:00'} ,
  { who : 'ofek', last_seen:'14.4 20:00'},
  { who : 'roni', last_seen:'14.4 20:00'}];

  const crate_contactlist = contact_list.map( (con, key) => {return <Contacts {...con} key={key}/>});


  return (
    <div>
      <div className="msghead">
        <img id="msgicon" src = "/pic1.png"></img> 
        Messaging
      </div>
      <hr></hr>
  <div class="container-fluid" id="chat_con">
  <div class="row">
    <div class="col-3">
    <div id='chats'>Chats <AddChat id="add"/></div>  
            <div class="d-grid">
            <button type="button" class="btn btn-outline-light btn-lg text-start"><img src = "mypic.png" class="rounded " d-block alt="..."></img> 
              Hod <d class="fw-lighter fst-italic fs-6">12:05</d> </button>
            </div>
    </div>



    <div class="col-8" id="mainscreen">
      This is box for chat
    </div>
  </div>
</div>



    </div>
  );
}


export default App;

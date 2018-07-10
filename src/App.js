import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';
import moment from 'moment';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes : [],
      name :'Chandra',
      startDate : moment(),
      notesTitle: '',
      notesDetails: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.notesTitle === undefined || this.state.notesTitle === ''){
      alert("Cannot Save. Title is Empty")
    }else{
      // alert("Your note " + this.state.notesTitle + " has been added");
      const data = {
        Title: this.state.notesTitle,
        Details: this.state.notesDetails
      };
      firebase.database().ref('/notes').push( data , response => response)
      this.setState({
        notesTitle : '',
        notesDetails : ''
      })
    }
  }

  handleChange(event){
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCyzMtzg5ISbaVEsAtbyo0oZqgkh_UkD2g",
      authDomain: "notepad-d56d7.firebaseapp.com",
      databaseURL: "https://notepad-d56d7.firebaseio.com",
      projectId: "notepad-d56d7",
      storageBucket: "notepad-d56d7.appspot.com",
      messagingSenderId: "646273750064"
    })

    firebase.database().ref('/notes')
      .on('value', snapshot => {
        let fbStore = snapshot.val();
        let notesfromDB = _.map(fbStore, (value, key) => {
          return {
            Id: key,
            Title: value.Title,
            Details: value.Details
          }
        });
        this.setState({
          notes : notesfromDB
        })
      })
  }

  deleteNote(id){
    firebase.database().ref(`/notes/${id}`)
    .remove()
    alert(`Successfully deleted ${id}`)
  }

  onDateChange(event){
    alert("Date Changed");
  }

  render() {
    return (
      <div className="App">
          <Header user = {this.state.name} />
          <Form 
              notesTitle = {this.state.notesTitle}
              notesDetails = {this.state.notesDetails}
              handleChange={(event) => this.handleChange(event)}
              handleSubmit={(event) => this.handleSubmit(event)} />
          <Grid notes={this.state.notes} deleteNote={this.deleteNote}/>
      </div>
    );
  }
}

export default App;

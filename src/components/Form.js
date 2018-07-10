import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.handleChange(event);
    }

    handleSubmit(event){
        this.props.handleSubmit(event);
    }

    render(){
        return(
    <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
            <div className="input-field col s3">
                <label> Title: </label>
                <input type="text" className="validate" name="notesTitle" value={this.props.notesTitle} onChange={this.handleChange} />
            </div>
            <div className="input-field col s6">
                    <label>Notes Details:</label>
                    <input type="text" className="validate" name="notesDetails" value={this.props.notesDetails} onChange={this.handleChange}/>
            </div>
            <div className="input-field col s3">
                <button className="btn waves-effect waves-light" type="submit" name="action">Add Note</button>
            </div>
        </div>
      </form>
      </div>
        )
    }

}

export default Form;

import React, {Component} from 'react';
import Single from './Single'

class Grid extends Component {

    displayItems(){
         return this.props.notes.map((note) => 
             <Single
                key={note.Id}
                note={note}
                deleteNote={this.props.deleteNote}
            />
        )
    }
    render(){
        return(
            <div className="row">
                {this.displayItems()}
            </div>
        )
    }

}

export default Grid;

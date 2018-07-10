import React from 'react';

const Single = (props) => {
    return(
            <div className="col s4">
                <div className="card teal lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">{props.note.Title}</span>
                        <p>{props.note.Details}</p>
                    </div>
                    <div className="card-action">
                         <a className="waves-effect waves-teal btn-flat" onClick={() => props.deleteNote(props.note.Id)}>
                         Delete</a>
                    </div>
                </div>
            </div>
    )
}

export default  Single;
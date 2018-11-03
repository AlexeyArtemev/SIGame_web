import React, {Component} from 'react'

import './Room.css'

export default class Room extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     isSelected: false
        // };

        // this.onRoomClick = this.onRoomClick.bind(this);
    }

    // onRoomClick(){ //TODO: Fix bug - while repeated click on room it's not selected
    //     let selectedRooms = document.getElementsByClassName('selected');
    //     // console.log(selectedRooms);
    //     if(selectedRooms) {
    //         selectedRooms[0].className = `room ${this.state.isSelected === true ? 'selected' : null}`;
    //     }
    //
    //     this.setState({
    //         isSelected: true
    //     });
    //     // Bg color while selected - '#633bf3'
    // }

    render() {
        return (
            <li className={this.props.roomClass}
                id={this.props.roomId}
                onClick={this.props.onRoomClick}
            >
                <div className="room-element is-locked"><i className="fas fa-lock"/></div>
                <div className="room-element room-name"><span>Саня, ты в порядке?</span></div>
                <div className="room-element room-package"><span>Аниме пак</span></div>
                <div className="room-element players"><span>2/3</span></div>
            </li>
        );
    }

}
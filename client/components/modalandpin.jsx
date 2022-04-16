import React from 'react';
import Pins from './pin';
import Modal from './modal';

export default class ModalAndPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      showModal: false
    };
  }

  addPin(pinDetails) {
    this.setState(State => {
      const newPins = {
        ...State.pins
      };
      newPins.push(
        <Pins pinDetails={pinDetails} key={State.pins.length} />
      );
      return {
        pins: newPins,
        showModal: false
      };
    });
  }

  render() {
    return (
      <div>
        <div className='navigation-bar'>
          <div onClick={() => this.setState({ showModal: true })} className="pint-mock-icon-container add-pin">
            <img src='/images/add.svg' alt='add-pin' className='pint-mock-icon' />
          </div>
        </div>

        <div className='pin-container'>
          {this.state.pins}
        </div>

        <div onClick={event => event.target.className === 'add-pin-modal' ? this.setState({ showModal: false }) : null}
          className="add-pin-modal-container">
          {
            this.state.showModal ? <Modal addPin = {this.addPin}/> : null
          }
        </div>
      </div>
    );
  }
}

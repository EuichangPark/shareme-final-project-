import React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='share'>
          <div className="share-wrapper">
            <div className="share-top">
              <img className='share-profile-img' src='https://serc.carleton.edu/images/curenet/funding/placeholder_650.jpg' />
              <input className='share-input' placeholder='Share your feelings' type='text' />
            </div>
            <div className="share-bottom">
              <div className='share-options'>
                <input accept="image/*" id="icon-button-photo" type="file" style={{ display: 'none' }} />
                <label htmlFor='icon-button-photo' className='pointer'>
                  <AddAPhotoIcon htmlColor='green' className='share-icon' aria-label='upload picture'/>
                  <span className='share-option-span'>Photo</span>
                </label>
              </div>
              <div className='share-options'>
                <input accept="video/*" id="icon-button-video" type="file" style={{ display: 'none' }} />
                <label htmlFor='icon-button-video' className='pointer'>
                  <OndemandVideoIcon htmlColor='lightBlue' className='share-icon' />
                  <span className='share-option-span'>Video</span>
                </label>
              </div>
              <div className='share-options'>
                <PhotoLibraryIcon htmlColor='lightGreen' className='share-icon' />
                <span className='share-option-span'>Photo Library</span>
              </div>
              <div className='share-options'>
                <FormatQuoteIcon className='share-icon' />
                <span className='share-option-span'>Quotes</span>
              </div>
              <div className='btn-wrapper'>
                <button className='btn-share' type='submit'>SHARE</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

}

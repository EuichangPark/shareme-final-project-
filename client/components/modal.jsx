import React, { useState } from 'react';

function uploadImage(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
  if (event.target.files && event.target.files[0]) {
    if (/image\/*/.test(event.target.files[0].type)) {
      const reader = new FileReader();

      reader.onload = function () {
        setPinDetails({
          ...pinDetails,
          imgBlob: reader.result
        });
      };
      setShowLabel(false);
      setShowModalPin(true);

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

function SavePin(pinDetails, addPin) {
  const userData = {
    ...pinDetails,
    user: 'Kent',
    board: 'default',
    title: document.querySelector('#pin-title').value,
    description: document.querySelector('#pin-description').value,
    destination: document.querySelector('#pin-destination').value,
    pinSize: document.querySelector('#pin-size').value
  };

  addPin(userData);
}

export default function Modal(props) {
  const [pinDetails, setPinDetails] = useState({
    user: '',
    board: '',
    title: '',
    description: '',
    imgBlob: '',
    pinsize: ''
  });
  const [showLabel, setShowLabel] = useState(true);
  const [showModalPin, setShowModalPin] = useState(false);

  return (
    <div className="add-pin-modal">
      <div className="add-pin-container">
        <div className="side" id='left-side'>
          <div className="section1">
            <div className="pint-mock-icon-container">
              <img src='/images/ellipsis.svg' alt='' className='pint-mock-icon' />
            </div>
          </div>

          <div className="section2">
            <label htmlFor='upload-img' id='upload-img-label'
            style={{
              display: showLabel ? 'block' : 'none'
            }}>
              <div className="upload-img-container">
                <div id="dotted-border">
                  <div className='pint-mock-icon-container'>
                    <img src='/images/arrowup.svg' alt='upload-img' className='pint-mock-icon' />
                  </div>
                  <div>Click to upload</div>
                  <div>Recommendation: Use high-quality .jpg less than 20MB</div>
                </div>
              </div>
              <input onChange={event => uploadImage(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin)} type="file" name="upload-img" id="upload-img" value='' />
            </label>
            <div className='modals-pin'
            style={{
              display: showModalPin ? 'block' : 'none'
            }}>
              <div className='pin-image'>
                <img src={pinDetails.imgBlob} alt='pin-image' />
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="save-from-site">Save from site</div>
          </div>
        </div>

        <div className="side" id='right-side'>
          <div className="section1">
            <div className="select-size">
              <select defaultValue='select' name="pin-size" id="pin-size">
                <option value=''>Select</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
              </select>
              <div onClick={() => SavePin(pinDetails, props.addPin)} className="save-pin">Save</div>
            </div>
          </div>
          <div className="section2">
            <input placeholder='Add your title' type="text" className="new-pin-input" id="pin-title" />
            <input placeholder='Tell everyone how you feel today' type="text" className="new-pin-input" id="pin-description" />
            <input placeholder='Add a destination Link' type="text" className="new-pin-input" id="pin-destination" />
          </div>

        </div>
      </div>
    </div>
  );
}

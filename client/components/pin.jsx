import React from 'react';

// function uploadImage(event, setPinImage) {
//   if (event.target.files && event.target.files[0]) {
//     if (/image\/*/.test(event.target.files[0].type)) {
//       const reader = new FileReader();

//       reader.onload = function () {
//         setPinImage(reader.result);
//       };

//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }
// }

function Pins(props) {

  // const [pinImage, setPinImage] = useState();

  return (
    <div>
      {/* <input onChange={event => uploadImage(event, setPinImage)} type='file' name='picture' id ='picture' value='' /> */}
      <div className='card'>
        <div className='pin-title'>{props.pinDetails.title}</div>
        <div className='pin-modal'>
          <div className='modal-head'>
            <div className='save-card'>Save</div>
          </div>
          <div className='modal-foot'>
            <div className="destination">
              <div className="pint-mock-icon-container">
                <img src='/images/info-solid.svg' alt='' className='pint-mock-icon' id='info'/>
              </div>
              <span>{props.pinDetails.destination}</span>
            </div>
            <div className="pint-mock-icon-container">
              <img src='/images/upload-solid.svg' alt='' className='pint-mock-icon' />
            </div>
            <div className="pint-mock-icon-container">
              <img src='/images/ellipsis.svg' alt='' className='pint-mock-icon' />
            </div>
          </div>
        </div>
        <div className='pin-image'>
          <img src ={props.pinDetails.imgBlob} alt='pin-image'/>
        </div>
      </div>
    </div>
  );
}

export default Pins;

import React, { useRef,useCallback} from 'react';
import './CameraSpot.css'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
const videoConstraints = {
    width:250,
    height:400,
    facingMode: "user"
}
function CameraSpot() {
    const history = useHistory()
    const dispatch = useDispatch();
    const webcamRef = useRef(null)
    const capture = useCallback(() => {
        const imgSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imgSrc));
        history.push('/preview')
        },[webcamRef])
    
    return (
        <div className="webcamCapture">
            <Webcam
            audio={false}
            ref={webcamRef}
            width={videoConstraints.width}
            height={videoConstraints.height}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
             />
             <RadioButtonUncheckedIcon 
             className="webcamCapture__button" 
             onClick={capture} 
             fontSize="large"/>
        </div>
    )
}
export default CameraSpot

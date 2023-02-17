import {useEffect, useRef} from "react";

const UploadWidget = () => {
const cloudinaryRef = useRef();
const widgetRef = useRef();

useEffect(() => {
    cloudinaryRef.current = windows.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "djcc03pyc",
        uploadPreset: "a291ohmc"
    }, function(error, result){
        console.log(result);
    });
}, [])
return (
    <button onClick={ () => widgetRef.current.open()}>
        Upload
    </button>
)
};

export default UploadWidget;
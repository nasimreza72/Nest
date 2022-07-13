import "./hostingPage5.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { housesContext } from "../../../Context/HousesContext.jsx";
import { updateDataPrivate } from "../../../lib";

export default function HostingPage5() {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [imageViewer, setImageViewer] = useState(0);
  const [secondFile, setSecondFile] = useState(null);
  const [helper, setHelper] = useState(false);
  const [objectId, setObjectId] = useState(""); 

  const {houseId} = useContext(housesContext);
  console.log('houseId :>> ', houseId);

  function uploadFirstImage(e) {
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("selectedFile", file);
      
      updateDataPrivate(`${process.env.REACT_APP_URL}/api/house/addImage/${houseId}`, formData)
        .then((result) => {
          setObjectId(result.data.fileID);
          setImageViewer(imageViewer + 1);
        })
        .catch((err) => console.log("err :>> ", err));
    }
    return;
  }, [file]);

  function uploadImage(e) {
    setSecondFile(e.target.files[0]);
  }

  useEffect(() => {
    if (secondFile) {
      const formData = new FormData();
      formData.append("selectedFile", secondFile);
      
      updateDataPrivate(`${process.env.REACT_APP_URL}/api/house/addSecondImage/${houseId}`, formData )
        .then((result) => setImageViewer(imageViewer + 1))
        .catch((err) => console.log("err :>> ", err));
    }
    return;
  }, [secondFile]);

  return (
    <div className="hostingPage5">
      <div className="mainLeft">
        <h1>Next, let's add some photos of your place</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <div
              className="uploadImageTop"
              style={{ display: objectId ? "none" : "flex" }}
            >
              <IoMdPhotos className="logo" />
              <div className="dragPhoto">Drag your photo here</div>
              <div className="addPhoto">Add minimum 5 photos</div>
            </div>

            <div
              className="uploadImageBottom"
              style={{ display: objectId ? "none" : "flex" }}
            >
              <div className="uploadFromDevice">
                Upload from your device
                <input
                  class="file_upload"
                  onChange={uploadFirstImage}
                  type="file"
                />
              </div>
            </div>
            
            {objectId && (
              <div className="wrapper">
                {imageViewer >= 1 && (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img
                    src={`${process.env.REACT_APP_URL}/api/house/getImage/${objectId}/0`}
                  />
                )}

                <h5>Add maximum five photos</h5>

                <div className="subWrapperTop">
                  <div className="firstImageBox">
                    <IoMdPhotos className="logo" />
                    <input
                      onChange={uploadImage}
                      type="file"
                      class="file_upload"
                    />
                    {imageViewer > 1 && (
                      <img
                        src={`${process.env.REACT_APP_URL}/api/house/getImage/${objectId}/1`}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="secondImageBox">
                    <IoMdPhotos className="logo" />
                    <input
                      onChange={uploadImage}
                      type="file"
                      class="file_upload"
                    />
                    {imageViewer > 2 && (
                      <img
                        src={`${process.env.REACT_APP_URL}/api/house/getImage/${objectId}/2`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="subWrapperBottom">
                  <div className="thirdImageBox">
                    <IoMdPhotos className="logo" />
                    <input
                      onChange={uploadImage}
                      type="file"
                      class="file_upload"
                    />
                    {imageViewer > 3 && (
                      <img
                        src={`${process.env.REACT_APP_URL}/api/house/getImage/${objectId}/3`}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="fourthImageBox"
                  onChange={() => setHelper(true)}
                  >
                    <IoMdPhotos className="logo" />
                    <input
                      onChange={uploadImage}
                      type="file"
                      class="file_upload"
                    />
                    {imageViewer > 4 && (
                      <img
                        src={`${process.env.REACT_APP_URL}/api/house/getImage/${objectId}/4`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage4", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next"
              style={
                helper ? { opacity: 1 } : { opacity: ".25", zIndex: -1 }
              }
            >
              <button
                onClick={() => navigate("../hostingPage6", { replace: true })}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

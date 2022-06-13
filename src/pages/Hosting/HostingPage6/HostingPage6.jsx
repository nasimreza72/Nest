import "./hostingPage6.scss";
import { IoMdPhotos } from "react-icons/io";


export default function HostingPage6() {


  return (
    <div className="hostingPage6">
      <div className="mainLeft">
        <h1>Let's give your place a name </h1>
      </div>
      <div className="mainRight">
          <div className="subMainRight">
              <div className="subMainRightDiv">
                    <h4>Create your title</h4>
                    <textarea type="text" placeholder="Cheerful 1-bedroom home in Berlin" />
                    <p>0/50</p>
              </div>
        
          </div>
          <div className="subMainRightBottom">
              <div className="bottomPart">
                  <div className="back">
                      <button><u>Back</u></button>
                  </div>
                  <div className="next">
                      <button>Next</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

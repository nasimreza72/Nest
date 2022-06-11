import "./hostingPage4.scss";
import { MdFoodBank, MdWifi, MdTv, MdHomeWork } from "react-icons/md";
import { GiWashingMachine, GiForkKnifeSpoon,   } from "react-icons/gi";
import { CgSmartHomeRefrigerator} from "react-icons/cg";


export default function HostingPage4() {


  return (
    <div className="hostingPage4">
      <div className="mainLeft">
        <h1>Let guests know what your place has to offer?</h1>
      </div>
      <div className="mainRight">
          <div className="subMainRight">

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Kitchen</div>
                  <div className="rightWrapper">
                 <MdFoodBank className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Tableware</div>
                  <div className="rightWrapper">
                 <GiForkKnifeSpoon className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Wifi</div>
                  <div className="rightWrapper">
                 <MdWifi className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Television</div>
                  <div className="rightWrapper">
                 <MdTv className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Refrigerator</div>
                  <div className="rightWrapper">
                 < CgSmartHomeRefrigerator className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Washing machine</div>
                  <div className="rightWrapper">
                 <GiWashingMachine className="rightWrapperIcon"/>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Work space</div>
                  <div className="rightWrapper">
                 <MdHomeWork className="rightWrapperIcon"/>
                  </div>
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

import'./Carddes.css'
import Buttonto from '../buttons/index';
import { TiTick } from "react-icons/ti";
import { FiX } from "react-icons/fi";

function Cardde1(){
    return(
        <div>
            <div className="carddesign">
            <span id="Head0">PLUS</span>
            <div id="Head1"><b>$9/month</b></div>
            <hr id="lic"/>
            <div className="container">
            <div id="tick">
            <span><TiTick/>5 user</span><br/>
            <span><TiTick/>50GB Storage</span><br/> 
            <span><TiTick/>Unlimited Public Projects</span><br/> 
            <span><TiTick/>Community Access</span><br/>   
            <span><TiTick/>Unlimited Private Projects</span><br/>
            <span><TiTick/>Dedicated Phone Support</span><br/>
            <span><TiTick/>Free Subdomain</span><br/>
            </div>
            <div id="wrong1">
           
            <span><FiX id="wron"/>Monthly Status Reports</span><br/>
            </div> 
            <div id="butend">
    <Buttonto/>
    </div>
        </div>
            </div>
            
    </div>
    )
}
export default Cardde1;
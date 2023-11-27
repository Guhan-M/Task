import'./Carddes.css'
import Buttonto from '../buttons/index';
import { TiTick } from "react-icons/ti";
import { FiX } from "react-icons/fi";

function Cardde(){
    return(
        <div>
            <div className="carddesign">
            <span id="Head0">FREE</span>
            <div id="Head1"><b>$0/month</b></div>
            <hr id="lic"/>
            <div className="container">
            <div id="tick">
            <span><TiTick/>Single user</span><br/>
            <span><TiTick/>50GB Storage</span><br/> 
            <span><TiTick/>Unlimited Public Projects</span><br/> 
            <span><TiTick/>Community Access</span><br/>   
            </div>
            <div id="wrong1">
            <span><FiX id="wron"/>Unlimited Private Projects</span><br/>
            <span><FiX id="wron"/>Dedicated Phone Support</span><br/>
            <span><FiX id="wron"/>Free Subdomain</span><br/>
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
export default Cardde;
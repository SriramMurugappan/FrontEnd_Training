import { useState } from "react";

function AboutUs(props){
    props.companyName= "Gavs Ltd";
    const [companyName, setCompanyName]=useState(props.companyName);
    const [address,setAddress]=useState(props.address);
    
    return(<center><div>
        <b>Contact Us @</b> {companyName}<br />
        <b>Our Address</b> {address}        
        </div></center>)
}
export default AboutUs;
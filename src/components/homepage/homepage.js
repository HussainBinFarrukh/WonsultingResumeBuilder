import React, { Component } from 'react';
import './TemplatePage.css';

class homepage extends Component {
    render() {
        return (
     <div className="homeMainDiv">    

                <div className = "nav">
                    <a  href = "https://www.wonsulting.com/">
                        <img alt = "WosultingLogo" src = "https://static1.squarespace.com/static/5eb5da6f83c10525dd06053c/t/5ed3f92325a6bf670be9d351/1595012784588/?format=100w" />
                    </a>
                    <input id="home" type = "button" value = "Pick A Template"
                        onClick = "PickTemp()" /> 
                    <input id="home" type = "button" value = "Enter Your Information"
                    onClick = "EnterInfo()"/>        
                    <input id="home" type = "button" value = "Download"
                    onClick = "Download()" />
                </div>
                <div className="c">
                    <div className = "column  1">
                        <h1> Need an effective Resume?</h1>
                        <h2 style={{color: "#eafcf4;"}}>Create your own for FREE!</h2>
                    </div>        
                    <div className = "column 2">
                        <div className = "laptop_resume">
                            <img alt = "resume" 
                            src = "https://images.squarespace-cdn.com/content/v1/5eb5da6f83c10525dd06053c/1592715517580-YI925X7JVHYD6QB6J5NQ/ke17ZwdGBToddI8pDm48kCnsOltskEO9zn-SlYmTY5Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDHH0M23prfXZiRlGry70Y0l9ShCbdlUaVbChZXEWDgeDatOA1Gh54zA9uUQ1mGar/New+Resume.png" 
                            height = "175px" width = "200px"/>
                            <i className="material-icons" style = {{fontSize: "400px"}}>laptop_mac</i>
                            <div className = "box"></div>
                            <div className ="circle"></div>
                        </div>
                </div>
            </div>
            <div className = "bottom">
                <a href="/resume" id="button">Get Started</a>
            </div>
       </div>
        );
    }
}

export default homepage;
import React, { Component } from 'react';
import './TemplatePage.css';

class Faq extends Component {
    render() {
        return (
            <div>
                            
            <div className = "d">
            <div className = "column main">   
                <h1>   What is a Resume? </h1>
                    
                    <p>
                    A resume is defined as “a brief written account of personal, educational, 
                    and professional qualifications and experience, as that prepared by an 
                    applicant for a job or internship”.
                    <br/>
                    <br/>
                    Your resume should typically exemplify your skills and experiences; 
                    however, we want your resume to be more than just that. We’ve seen resumes 
                    both as students and professionals; as a result of out revisions, we’ve been 
                    able to help our clients land jobs at Google, Facebook, LinkedIn, Amazon, 
                    Microsoft, Deloitte, Goldman Sachs, and other Fortune 500 companies. 
                    </p>     
            </div>

            <div className = "column side">
                <table className = "t">
                    <tr>
                        <th> <b>How does it work? </b> </th>
                    </tr>

                    <tr>
                        <td>
                            <p>
                            <b>Step 1:</b>Choose a template <br/>
                            <br/>
                            <b>Step 2:</b> Enter your information <br/>
                            <br/>
                            <b>Step 3:</b> Review <br/>
                            <br/>
                            <b>Step 4:</b> Download <br/>
                            <br/>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            </div>

            <div className = "column_1">
            <div>
                <i className= "material-icons"> check_circle_outline </i>
                <p> Recruiter Approved Template </p>
            </div>

            <div>
                <i className= "material-icons"> money_off </i>
                <p> 100% Free </p>
            </div>
            </div>


            <div className = "column_1">
            <div>
                <i className = "material-icons"> work_outline</i>
                <p> Land Interviews </p>
            </div>

            <div>
                <i className = "material-icons"> alarm </i>
                <p> Takes Less Than Ten Minutes </p>
            </div>
            </div>

            <div className = "bottom">
            <button id = "go">
                Let's Begin
            </button>
            </div>


            </div>
        );
    }
}

export default Faq;
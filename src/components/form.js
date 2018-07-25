import React, {Component} from "react";
import "../styles/form.css"
import "../styles/animate.css"


class Form extends Component {

    state = {
        hourlyRate: "",
        hoursWorked: "",
        payPeriod: "",
        allowanceClaimed: "",
        maritalStatus: ""
        }

    inputChangeHandler =(event) =>{
        this.setState( {[event.target.name]: event.target.value} )

    }

    handleSubmit = (event) => {
        console.log(this.state.hourlyRate);
        event.preventDefault();
    }

render(){
return( 
        <div className="jumbotron">
            <div className="col-md-5 offset-md-8 align-self-end">System Status: <span className="dot"> </span> Online</div>
            
            <form onSubmit={this.handleSubmit}>
                <div className="col">
                    <label>Hourly Rate</label>
                    <input type="text" className="form-control" placeholder="Hourly Pay" id="hourlyRate" 
                            value={this.state.hourlyRate} 
                            onChange= {this.inputChangeHandler.bind(this)}/>
                </div>
                <div className="col">
                    <label>Hours Worked</label>
                    <input type="text" className="form-control" placeholder="Work Hours" id="hoursWorked" 
                            value={this.state.hoursWorked} 
                            onChange= {this.inputChangeHandler.bind(this)}/>
                </div>

                <div className="col">
                    <label>Select Pay Period</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="payPeriod" value="Weekly" 
                                checked = {this.state.payPeriod === "Weekly"}
                                onChange= {this.inputChangeHandler.bind(this)}/>
                        <label className="form-check-label" htmlFor="weekly">Weekly</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="payPeriod" value="Bi-Weekly" 
                                checked = {this.state.payPeriod === "Bi-Weekly"}
                                onChange= {this.inputChangeHandler.bind(this)}/>
                        <label className="form-check-label" htmlFor="biWeekly">Bi-Weekly</label>
                    </div>
                </div>
                <div className="col">
                    <label>Allowance Claimed</label>
                    <input type="text" className="form-control" placeholder="Enter number of allowance(s) claimed" name="allowanceClaimed" id="allowanceClaimed" 
                            checked = {this.state.allowanceClaimed}
                            onChange= {this.inputChangeHandler.bind(this)} />
                </div>
                <div className="col">
                    <label>Marital Status</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="maritalStatus" value="Single" 
                        checked = {this.state.maritalStatus === "Single"}
                        onChange= {this.inputChangeHandler.bind(this)}/>
                        <label className="form-check-label" htmlFor="single">Single/Head of Household</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="maritalStatus" value="Married" 
                        checked = {this.state.maritalStatus === "Married"}
                        onChange= {this.inputChangeHandler.bind(this)} />
                        <label className="form-check-label" htmlFor="married">Married</label>
                    </div>
                </div>
            </form>
            <br />
            <div className="row justify-content-center">
            <button type="submit">Submit</button>
                {/* <button type="button" className="btn btn-outline-secondary align-items-center">Calculate</button> */}
            </div>
            </div>
)
}
};

export default Form;
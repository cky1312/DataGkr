import React,{useState} from "react";

import "../Style/form.css";

const Form = () =>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [field3, setField3] = useState("");
    const [field4, setField4] = useState("");
    const [field5, setField5] = useState("");
    const [field6, setField6] = useState("");

    const [flag, setFlag] = useState(true);

    const details = {
        fname, lname, field3, field4, field5, field6
    }

    const Adddetails = ()=>{
        setFlag(false);
        localStorage.setItem("details", JSON.stringify(details));
    }

    return(
        <div className="container"> 
            {(flag === true) && <form>
                <div className="grid">
                <div className="fname">
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <input type="text" name="fname" value={fname}
                        onChange={e => setFname(e.target.value)}/>
                </div>

                <div className="lname">
                    <label htmlFor="lname">Last Name</label>
                    <br />
                    <input type="text" name="lname" value={lname}
                        onChange={e => setLname(e.target.value)}/>
                </div>

                <div className="field3">
                    <label htmlFor="lname">Field3</label>
                    <br />
                    <input type="text" name="lname" value={field3}
                        onChange={e => setField3(e.target.value)}/>
                </div>

                <div className="field4">
                    <label htmlFor="lname">Field4</label>
                    <br />
                    <input type="text" name="lname" value={field4}
                        onChange={e => setField4(e.target.value)}/>
                </div>

                <div className="field5">
                    <label htmlFor="lname">Field5</label>
                    <br />
                    <input type="text" name="lname" value={field5}
                        onChange={e => setField5(e.target.value)}/>
                </div>
                <div className="field6">
                    <label htmlFor="lname">Field6</label>
                    <br />
                    <input type="text" name="lname" value={field6}
                        onChange={e => setField6(e.target.value)}/>
                </div>

                <div className="field6">
                    <label htmlFor="lname">Field6</label>
                    <br />
                    <input type="text" name="lname" value={field6}
                        onChange={e => setField6(e.target.value)}/>
                </div> 

                <div className="storage">
                    <label htmlFor="lname">Storage Medium</label>
                    <br />
                    <select className="option">
                        <option  value="local"></option>
                        <option value="local">Local Storage</option>
                        <option value="database">Database</option>
                    </select>
                </div>   
                <button onClick={Adddetails}>Submit</button>
                </div>
            </form>}
            {(flag===false) && 
                <h1>Thank You for Submitting your details</h1>
            }
        </div>
    )
}

export default Form;

import React, {useState} from "react";
import {connect} from "react-redux";

const Form = ({submitForm}) => {
    const [form, setForm] = useState('')
    const changeHandler = (e) => {
        e.preventDefault()
        setForm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        submitForm(form)
        setForm('')
    }

    return (
        <div className="row container">
            <form className="col s12" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="town" type="text" className="validate" onChange={changeHandler} value= {form}/>
                            <label htmlFor="town">City</label>
                    </div>
                    <button className="btn waves-effect waves-light col s2" type="submit" name="action">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (form) => {dispatch({type: "SAVE_TOWN", payload: form})}
    }
}

export default connect(null, mapDispatchToProps)(Form);
import React, {useState} from "react"
import {connect, useDispatch, useSelector} from "react-redux"
import {fetchCards} from "../redux/actions"

const Form = ({submitForm}) => {
    const dispatch = useDispatch()
    const towns = useSelector(state => state.townsReducer)
    const [form, setForm] = useState('')

    const changeHandler = (e) => {
        e.preventDefault()
        setForm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (towns.includes(form)) {
            setForm('')
        }
        else {
            dispatch(fetchCards(form))
            submitForm(form)
            setForm('')
        }

    }

    return (
        <div className="row container">
            <form className="col s12" onSubmit={submitHandler}>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="town" type="text" className="validate" onChange={changeHandler} value= {form}/>
                            <label htmlFor="town">Find your city</label>
                    </div>
                    <button className="button btn waves-effect waves-light col s2" type="submit" name="action">
                        Find
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
import React from "react"
import Cards from "../components/Cards"
import Form from "../components/Form"


function HomePage() {
    return (
        <div>
            <Form />
            <div className="row s12">
                <Cards/>
            </div>
        </div>
    );
}

export default HomePage;

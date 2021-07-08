import React from "react"
import "../style/dummy.css"

const Dummy = () => {

    const dummyText = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ]

    return (
        <div className="dummy-container">
            <h1 className="dummy-header">Dummy Heading</h1>
            <p>
                {dummyText[0]}
            </p>
        </div>
    )
}

export default Dummy
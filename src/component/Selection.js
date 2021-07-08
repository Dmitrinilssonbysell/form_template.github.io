import React from "react"

const Selection = () => {
    return (
        <select>
            <option value="" disabled selected>
                I would describe my user type as
            </option>
            <option value="developer">
                Developer
            </option>
            <option value="designer">
                Designer
            </option>
        </select>
    )
}

export default Selection
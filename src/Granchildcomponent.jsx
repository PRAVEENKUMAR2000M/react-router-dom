import React from 'react'

function Granchildcomponent({text}) {
    return (
        <div>
            <h1>Grandchildcomponent</h1>
            <p>message from Grandchild <b>{text}</b></p>
        </div>
    )
}

export default Granchildcomponent
import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
        
    }

    return (
        props.alert &&
        <>
            <div class={`alert alert-${props.alert.type} alert-dismissible`} role="alert" style={{ marginTop: '3px' }}>
                {/* here we add a function capitalize to pass the 'sucess' to create a S uppercase */}
                <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
            </div>
        </>
    )
}

export default Alert

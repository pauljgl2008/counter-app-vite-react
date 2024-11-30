import React from 'react'
import PropTypes from 'prop-types'

const newMessage = { message: 'hola', title: 'title' };

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ({ name = 'Paúl', title = 'No hay título', subTitle = 'No hay subtítulo' }) => {
    return (
        <>
            <p>{name}</p>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            {/* <p>{getResult(1,4)}</p> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1 data-testid="test-title"> {title} </h1>
            <p>Easy React</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}
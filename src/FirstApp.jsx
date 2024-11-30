import React from 'react'
import PropTypes from 'prop-types'

const newMessage = {message:'hola',title:'title'};

const getResult = (a,b)=>{
    return a+b;
}

export const FirstApp = ({name='Paúl', title='No hay título', subTitle='No hay subtítulo'}) => {
    return (
        <>
        <p>{name}</p>
        <p>{title}</p>
        <p>{subTitle + 1}</p>
        {/* <p>{getResult(1,4)}</p> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>Easy React</p>
        </>
    )
}
FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}
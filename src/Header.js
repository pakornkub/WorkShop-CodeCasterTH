import React from 'react'

function Header(props) {

    let {currentUser,isLoggedIn} = props

    return (
        <div>Header {isLoggedIn && currentUser}</div>
    );
    
}

export default Header

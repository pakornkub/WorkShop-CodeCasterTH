import React from 'react'

const Header = (props) => {

    let {currentUser,isLoggedIn} = props

    const handleHeaderClicked = () => {

        alert(currentUser)

    }

    return (
        <div onClick={handleHeaderClicked}>Header {isLoggedIn && currentUser}</div>
    );
    
}

export default Header

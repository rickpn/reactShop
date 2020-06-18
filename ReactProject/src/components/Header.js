import React from 'react'

const renderLink = (props) => {
    const nickName = props.nickName;
    if (nickName) {
        return (
            <span className="nickName">
                <i className="far fa-user"></i>
                {nickName}
            </span>
        );
    } else {
        return (
            <React.Fragment>
                <a href="/">LOGIN</a>
                <a href="/">REGISTER</a>
            </React.Fragment>
        )
    }
};

const Header = (props) => (

    <div className="header">
        <div className="grid">
            <div className="start">
                <a href="/">HOME</a>
            </div>
            <div className="end">
                {renderLink(props)}
            </div>
        </div>
    </div>


);




export default Header;
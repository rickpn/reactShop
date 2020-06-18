import React from 'react'
import Products from 'components/Products';
import Header from 'components/Header';


class App extends React.Component {

    render() {
        return (

            <div className="main">
                <Header nickName="Rickpn(Admin)"  />
                <Products />

            </div>
        )
    }

}

export default App;
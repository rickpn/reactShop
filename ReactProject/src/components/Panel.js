import React from 'react'
import { render } from 'react-dom'



class Panel extends React.Component {


    state = {
        active: false,
        component: null,
        callback: () => { }
    }

    close = datafromInventory => {
        this.setState(
            { active: false }
        );
        this.state.callback(datafromInventory)
    }

    open = (options = {
        props: {},
        component: null,
        callback: () => { }

    }) => {
        const { props, component, callback } = options;
        const _key = new Date().getTime()
        const _component = React.createElement(component, {
            ...props,
            close: this.close, key: _key
        });
        this.setState({
            active: true,
            component: _component,
            callback: callback
        })
    }




    render() {
        const _class = {
            true: 'panel-wrapper active',
            false: 'panel-wrapper'
        }
        return (
            <div className={_class[this.state.active]}>
                <div className="over-layer" onClick={() => { this.close() }}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={() => { this.close() }}>x</span>
                        {this.state.component}
                    </div>
                </div>

            </div>
        )
    }
}

const _div = document.createElement('div')
document.body.appendChild(_div)

const _Panel = render(<Panel />, _div)

export default _Panel;
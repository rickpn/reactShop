import React from 'react';

class Login extends React.Component {


    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        };
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {

        return (

            <div className="login-wrapper">



                <form className="box login-box" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">メールアドレス</label>
                        <div className="control">
                            <input className="input"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                    </div>
                    <div className="field">
                        <label className="label">パスワード</label>
                        <div className="control">
                            <input className="input"
                                type="text"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </div>

                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-link" >ログイン</button>
                    </div>

                </form>

            </div>

        )

    }

}

export default Login;
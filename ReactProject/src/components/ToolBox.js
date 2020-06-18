import React from 'react'

class Toolbox extends React.Component {
    state = {
        searchText: '',

    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            searchText: value
        });
        this.props.search(value)
    };

    clearSearchText = () => {
        this.setState({
            searchText: ''
        });
        this.props.search('')
    };



    render() {
        return (
            <div className="tool-box">
                <div className="logo-text">商品管理システム</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input type="text"
                                className="input search-input"
                                placeholder="商品名から検索"
                                value={this.state.searchText}
                                onChange={this.handleChange}
                            />

                        </div>

                        <div className="control">
                            <button className="button"
                                onClick={this.clearSearchText}>
                                X
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        )
    }

}

export default Toolbox;
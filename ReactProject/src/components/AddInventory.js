import React from 'react';
import axios from 'commons/axios';
import { toast } from 'react-toastify';

class AddInventory extends React.Component {

    state = {
        name: '',
        price: '',
        tags: '',
        image: '/images/1.jpg',
        status: 'available'
    }

    handleChange = e => {
        let value = e.target.value;
        const name = e.target.name;

        if (name === "price") {

            value = parseInt(value, 10);
        }

        this.setState({
            [name]: value
        })
    }

    submitForm = e => {
        e.preventDefault();
        const product = { ...this.state };

        axios.get(`/products/add?name=${product.name}&price=${product.price}&tags=${product.tags}&image=${product.image}&status=${product.status}`)
            .then(res => {
                toast('登録成功！');
                this.props.close(res.data[0]);
            })


    };



    render() {

        return (
            <div className="inventory">
                <p className="title has-text-centered">商品追加</p>

                <form onSubmit={this.submitForm}>

                    <div className="field">
                        <div className="control">
                            <label className="label">名前</label>
                            <textarea className="textarea" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">単価</label>
                            <input type="number" className="input" name="price" min="0" max="1000000" value={this.state.price} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">メーカー</label>
                            <input type="text" className="input" name="tags" value={this.state.tags} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">写真</label>
                            <div className="select">
                                <select name="image" value={this.state.image} onChange={this.handleChange}>
                                    <option value="/images/1.jpg">iPhoneSE</option>
                                    <option value="/images/2.jpg">PS4</option>
                                    <option value="/images/3.jpg">カメラ</option>
                                    <option value="/images/4.jpg">AirpodsPro</option>
                                    <option value="/images/5.jpg">電子レンジ</option>
                                    <option value="/images/6.jpg">ヘッドホン</option>
                                    <option value="/images/7.jpg">液晶テレビ</option>
                                    <option value="/images/8.jpg">炊飯器</option>
                                    <option value="/images/9.jpg">iPadPro</option>
                                    <option value="/images/10.jpg">AppleWatch</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">在庫</label>
                            <div className="select is-fullwidth">
                                <select name="status" value={this.state.status} onChange={this.handleChange}>
                                    <option value="available">在庫あり</option>
                                    <option value="unavailable">在庫なし</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link">登録</button>
                        </div>
                        <div className="control">
                            <button className="button" type="button" onClick={() => { this.props.close() }}>取消</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }





}

export default AddInventory;
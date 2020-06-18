import React from 'react'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'
import axios from 'commons/axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Panel from 'components/Panel'
import AddInventory from 'components/AddInventory'


class Products extends React.Component {





    getDataFromServer = () => {

        axios.get('/products')

            .then(res => {
                this.setState(
                    {
                        products: res.data,
                        sourceProducts: res.data
                    });

            });

    }






    componentDidMount() {
        this.getDataFromServer();

    }




    state = {
        products: [],
        sourceProducts: [],
        cartNum: 0
    }


    search = text => {

        let _products = [...this.state.sourceProducts];
        _products = _products.filter(p => {
            const matchArray = p.name.match(new RegExp(text, 'gi'));
            return !!matchArray;
        });
        this.setState({
            products: _products
        });
    }

    toAdd = () => {
        Panel.open({
            component: AddInventory,
            callback: data => {

                if (data) {

                    this.addStates(data);
                }
            }
        })

    }

    addStates = product => {

        const _products = [...this.state.products];
        _products.push(product);
        const _sourceProducts = [...this.state.sourceProducts];
        _sourceProducts.push(product);

        this.setState({
            products: _products,
            sourceProducts: _sourceProducts
        })

    }

    updateStates = product => {
        const _products = [...this.state.products];
        const _index = _products.findIndex(p => p.id === product.id)
        _products.splice(_index, 1, product)

        const _sourceProducts = [...this.state.sourceProducts];
        const _sourceIndex = _sourceProducts.findIndex(p => p.id === product.id)
        _sourceProducts.splice(_sourceIndex, 1, product)


        this.setState({
            products: _products,
            sourceProducts: _sourceProducts
        })
    }

    deleteStates = id => {
        const _products = this.state.products.filter(p => p.id !== id);
        const _sourceProducts = this.state.products.filter(p => p.id !== id);


        this.setState({
            products: _products,
            sourceProducts: _sourceProducts
        });

    };



    render() {
        return (
            <div>
                <ToolBox search={this.search} />

                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        <TransitionGroup component={null}>
                            {
                                this.state.products.map(p => {
                                    return (
                                        <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                                            <div className="column is-3" key={p.id}>

                                                <Product product={p} update={this.updateStates} delete={this.deleteStates} />

                                            </div>
                                        </CSSTransition>
                                    )
                                })
                            }
                        </TransitionGroup>
                    </div>
                    <button className="button is-danger add-btn" onClick={this.toAdd}>商品登録</button>
                </div>
            </div>

        )
    }

}

export default Products;
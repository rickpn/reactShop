import React from 'react'

import Panel from 'components/Panel'
import { formatPrice } from 'commons/helper'
import EditInventory from 'components/EditInventory'


class Product extends React.Component {

    toEdit = () => {
        Panel.open({
            component: EditInventory,
            props: {
                product: this.props.product,
                delete: this.props.delete
            },

            callback: (data) => {
                if (data) {
                    this.props.update(data)
                }
            }
        })
    }


    render() {


        const { name, price, tags, image, status } = this.props.product;

        const pClass = {
            available: 'product',
            unavailable: 'product out-stock'
        }
        return (
            <div className={pClass[status]}>
                <div className="p-content">
                    <div className="p-head has-text-right" onClick={this.toEdit}>
                        <span className="icon edit-btn">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                    </div>
                    <div className="img-wrapper">
                        <div className="out-stock-text">在庫なし</div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name} />
                        </figure>

                    </div>
                    <p className="p-tags">{tags}</p>
                    <p className="p-name">{name}</p>

                </div>
                <div className="p-footer">
                    <p className="price">{formatPrice(price)}</p>
                    <button className="add-cart" disabled={status === ' unavailabe'}>

                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>


        )
    }

}

export default Product;
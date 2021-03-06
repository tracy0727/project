import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = ({ num: '' })
        this.getbuy = this.getbuy.bind(this)
        this.changeNum = this.changeNum.bind(this)
    }

    getbuy() {
        const id = this.props.match.params.id;
        const p = this.props.products.find(p => p.id === Number(id));
        this.props.onAdd({ id: id, name: p.name, image: p.picture, price: p.price * this.state.num, num: this.state.num });
        alert('已加入購物車')
    }
    changeNum(event) {
        this.setState({ num: event.target.value })
    }
    render() {
        const id = this.props.match.params.id;
        if (!id) return <Redirect to="/" />
        const p = this.props.products.find(p => p.id === Number(id));
        if (!p) return <div>Loading</div>

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">Shop Name</h1>
                        <div className="list-group">
                            <Link href="#" className="list-group-item">配件飾品</Link>
                            <Link href="#" className="list-group-item">居家生活</Link>
                            <Link href="#" className="list-group-item">包包提袋</Link>
                        </div>
                    </div>

                    <div className="col-lg-9">

                        <div className="card mt-4">
                            <img className="card-img-top img-fluid" src={p.picture} alt="" />
                            <div className="card-body">
                                <h3 className="card-title">{p.name}</h3>
                                <h4>${p.price}</h4>
                                <p>數量:
                                    <select onChange={this.changeNum}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </p>
                                <p className="card-text">
                                    付款後，從備貨到寄出商品為 3 個工作天。（不包含假日）<br />
                                    設計館符合免辦理營業登記，無需開立統一發票</p>
                                <button type="button" className="btn btn-primary" onClick={this.getbuy}>加入購物車</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default Product;

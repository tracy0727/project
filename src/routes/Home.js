import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = ({ buyList: '' })
        this.getallbuy = this.getallbuy.bind(this)
    }

    getallbuy(p) {
        this.props.onAdd({ id: p.id, name: p.name, image: p.picture, price: p.price, num: 1 });
        alert('已加入購物車')
    }
    renderProducts(p) {
        return (
            <div className="col-lg-4 col-md-6 mb-4" key={'product-' + p.id}>
                <div className="card h-100">
                    <Link to={`/product/${p.id}`}><img className="card-img-top" src={p.picture} alt="" width="140" height="180" /></Link>
                    <div className="card-body">
                        <h7 className="card-title">
                            <Link to={`/product/${p.id}`}>{p.name}</Link>
                        </h7>
                        <h5>NT$ {p.price}</h5>

                        <button type="button" className="btn btn-primary" onClick={(ev) => this.getallbuy(p)}>加入購物車</button>
                    </div>

                </div>
            </div>
        );
    }
    renderBanner(p) {
        return (
            <div className="carousel-item ">
                <img className="d-block img-fluid" src={p.picture} alt="First slide" />
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="my-4">Shop</h1>
                            <div className="list-group">
                                <Link href="#" className="list-group-item">配件飾品</Link>
                                <Link href="#" className="list-group-item">居家生活</Link>
                                <Link href="#" className="list-group-item">包包提袋</Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src="https://cdn04.pinkoi.com/pinkoi.site/clickables/herobanner/1554190909_4RRFPR.jpg" alt="First slide" />
                                    </div>
                                    {this.props.banners.map(p => this.renderBanner(p))}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                            <div className="row">

                                {this.props.products.map(p => this.renderProducts(p))}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Home;

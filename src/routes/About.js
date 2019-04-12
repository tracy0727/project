import React, { Component } from 'react';
class About extends Component {

    constructor(props) {
        super(props)
        this.state = ({ price: 0 })
    }
    checkout = (totalPrice) => {
        alert(`已從您的信用卡中扣除${totalPrice}元！`);
        
    }
    
    render() {
        const totalPrice = this.props.list.reduce((acc, item) => (acc += item.price), 0)
        return (
            <div>
                <div></div>
                <div className="todolist" style={{ margin: '0 auto', width: '70%' }}>
                    <table width="100%">
                        <tr>

                            <td width="20%">#</td>
                            <td width="50%">品項</td>
                            <td width="10%">價格</td>
                            <td width="10%">個數</td>
                            <td width="20%"></td>
                        </tr>
                        {
                            this.props.list.map(({ id, name, image, price, num }, index) => {

                                return (

                                    <tr key={index}>

                                        <td width="20%"><img className="card-img-top img-fluid" src={image} alt="" style={{ height: '140px', width: '180px' }} /></td>
                                        <td width="50%">{name}</td>
                                        <td width="10%">{price}</td>
                                        <td width="10%">{num}</td>
                                        <td width="20%"><button class="btn btn-danger" onClick={() => this.props.onRemove(index)}>移除</button></td>
                                    </tr>
                                )
                            })
                        }

                    </table>
                    <hr />

                    <table width="100%">
                        <tr>
                            <td width="20%"></td>
                            <td width="50%"></td>
                            <td width="20%"colSpan="2">總金額: NT: {this.props.list.reduce((acc, item) => (acc += item.price), 0)}</td>
                            {/* <td width="10%">總筆數: {this.props.list.length}</td> */}
                            <td width="20%" >
                            <button
                                    disabled={this.props.list.length === 0}
                                    class="btn btn-primary"
                                    onClick={() => this.checkout(totalPrice)}
                                >結帳</button>
                            </td>

                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default About;

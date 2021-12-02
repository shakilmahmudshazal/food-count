import React , { useState } from 'react';
import { withRouter } from 'react-router-dom';

 class PayForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.user ? props.user.name : '',
            amount: props.user && props.user.amount ? (props.user.amount).toString() : 0,
            paid: props.user &&  props.user.paid ? (props.user.paid).toString() : 0,
            newPaid:'',
            error: ''
        };
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onAmountChange = (e) => {
        const newPaid = e.target.value;

        if (!newPaid || newPaid.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ newPaid }));
        }
    };


    onSubmit = (e) => {
        e.preventDefault();
        const updatedPaid= (parseInt(this.state.paid)+parseInt(this.state.newPaid));

        if (!this.state.newPaid) {
            this.setState(() => ({ error: 'Please provide amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                amount: this.state.amount,
                paid:updatedPaid

            },this.state.newPaid);
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    autoFocus
                    className="text-input"
                    value={this.state.name}
                    onChange={this.onNameChange}
                    disabled={true}
                />
                <input
                    type="text"
                    placeholder="Name"
                    autoFocus
                    className="text-input"
                    value={"Due: "+(parseInt(this.state.amount)-parseInt(this.state.paid))+" bdt"}
                    
                    disabled={true}
                />
                <input
                    type="text"
                    placeholder="type amount to pay"
                    className="text-input"
                    value={this.state.newPaid}
                    onChange={this.onAmountChange}
                />



                <div>
                    <button className="button-save">Proceed Payment</button>
                    <button className="button-red" onClick={()=>{this.props.history.goBack();}}>Back</button>
                </div>
            </form>
        )
    }
}


export default  withRouter(PayForm);
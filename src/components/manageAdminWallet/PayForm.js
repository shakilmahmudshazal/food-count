import React , { useState } from 'react';
import { withRouter } from 'react-router-dom';

 class PayForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cash: props.admin && props.admin.cash ? (props.admin.cash).toString() : 0,
            paid: props.admin &&  props.admin.paid ? (props.admin.paid).toString() : 0,
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
        const updatedPaid= (parseInt(this.props.admin.paid ? this.props.admin.paid:0)+parseInt(this.state.newPaid));

        if ( !this.state.newPaid) {
            this.setState(() => ({ error: 'Please provide name and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
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
                    value={"Cash: "+(parseInt(this.props.admin.cash?this.props.admin.cash:0)-parseInt(this.props.admin.paid ?this.props.admin.paid : 0))+" bdt"}
                    
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
export default withRouter(PayForm) 
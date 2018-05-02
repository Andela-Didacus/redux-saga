import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    requestPageData,
    requestAddItem
} from "../modules/ui/actions";


class ReduxActions extends Component {

    state = {
        textBox: ""
    };

    textChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    buttonClicked = () => {
        this.props.requestPageData(this.state.textBox);
    };

    render() {
        return (
            <div>
                <input name="textBox" onChange={ this.textChanged } />
                <button onClick={ this.buttonClicked }>Add Item</button>
                <br />
                {this.props.items && this.props.items.map((item, index) => {
                    return <span> {index} is {item}<br/></span>
                })}
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ui: state.ui,
        items: state.ui.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            requestAddItem,
            requestPageData
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxActions);
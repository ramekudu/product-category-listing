import { React, Component, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductTable from '../ProductTable';
import {
    getProductData1
} from '../modules/ui/api';

import {
    requestProductData,
    requestPageData
} from '../modules/ui/actions';


class ProductMain extends Component {

    constructor() {
        super();
        this.state = {
        }
    }


    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    handleSubmit = (event) => {

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:8083/products/product', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    buttonClicked = () => {
        this.props.requestPageData(this.state.textBox)
    }



    render() {



        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Description:
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>Category:
                        <select name="categoryName" value={this.state.categoryName} onChange={this.handleChange} required>
                            <option defaultValue>Select a Category</option>

                            {this.props.pageData && this.props.pageData.data.map(category => (
                                <option value={category.categoryName}>{category.categoryName}</option>

                            )


                            )}





                        </select>
                    </label>
                    <br />
                    <input type="submit" value="Add Product" />
                </form>


                <ProductTable prodData={this.state.productData} />


            </div>
        )
    }
}


function mapStateToProps(appState, ownProps) {
    return {
        items: appState.ui.items,
        pageData: appState.ui.pageData,
        productData: appState.ui.productData

    }
}

function mapDispatchToProps(dispatch) {
    dispatch(requestPageData())
    dispatch(requestProductData())

    return {
        ...bindActionCreators({
            requestProductData,
            requestPageData
        }, dispatch)


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductMain)
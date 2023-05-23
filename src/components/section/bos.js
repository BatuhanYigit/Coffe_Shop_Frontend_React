import React, { Component } from "react";
import "../css/Details.css"
import "../css/Cart.css"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { DataContext } from "../Context";
export class Payment extends Component {
    static contextType = DataContext;
    componentDidMount() {
        this.context.getTotal();
    }

    handleSubmit(data) {
        fetch('http://localhost:8000/json-test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                data
            }
        });
    }


    render() {
        const { cart, increase, reduction, removeProduct, total, payment, syrup, handleSubmit } = this.context;
        return (

            <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
                <MDBRow>
                    <MDBCol md="8" className="mb-4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">Biling details</MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <form>
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='First name' type='text' />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Last name' type='text' />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBInput label='Address Detail' type='text' className="mb-4" />
                                    <MDBInput label='Address' type='text' className="mb-4" />
                                    <MDBInput label='Email' type='text' className="mb-4" />
                                    <MDBInput label='Phone' type='text' className="mb-4" />
                                    <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                                    <div className="d-flex justify-content-center">
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="mb-4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>${total}</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                        Payment Method
                                        <span>Cash</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>Total: ${total}</strong></span>
                                    </MDBListGroupItem>
                                </MDBListGroup>

                                <MDBBtn onClick={() => payment()} size="lg" block>
                                    Make purchase
                                    {console.log(cart)}
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}
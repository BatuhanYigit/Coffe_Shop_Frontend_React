import "../css/Details.css"
import "../css/Cart.css"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { useContext, useState } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
const Payment = () => {

    const handleSubmit = (data) => {
        fetch('http://localhost:8000/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                data
            }
        });
    }

    const { resetState, cart, total, payment, removeProductAll } = useContext(DataContext)

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [address, setAddress] = useState("")
    const [address_detail, setAddressDetail] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    return (

        <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
            <MDBRow>
                <MDBCol md="8" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <MDBTypography tag="h5" className="mb-0">Order Address</MDBTypography>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form>
                                <MDBRow className="mb-4">
                                    <MDBCol>
                                        <MDBInput onChange={(event) => setName(event.target.value)} value={name} label='First name' type='text' />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput onChange={(event) => setSurname(event.target.value)} value={surname} label='Last name' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput onChange={(event) => setAddress(event.target.value)} value={address} label='Address' type='text' className="mb-4" />
                                <MDBInput onChange={(event) => setEmail(event.target.value)} value={email} label='Email' type='text' className="mb-4" />
                                <MDBInput onChange={(event) => setPhone(event.target.value)} value={phone} label='Phone' type='text' className="mb-4" />
                                <MDBTextArea onChange={(event) => setAddressDetail(event.target.value)} value={address_detail} label='Address Detail' rows={4} className="mb-4" />

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

                            <MDBBtn onClick={() => {
                                console.log('qamwdmkqmkw')
                                payment({ name: name, surname: surname, address_name: address, email: email, phone: phone, address_detail: address_detail });
                                localStorage.clear();
                                resetState()

                            }} size="lg" block>
                                <Link to="/paymentcompleted">
                                    Make purchase
                                </Link>


                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div >
    )
}

export default Payment
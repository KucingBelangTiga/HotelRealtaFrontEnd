import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Hotel from '../../../src/api/booking/booking';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Layout from '@/src/components/layout';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import React, {useRef} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function HotelCheckout(){
    const [hotel, setHotel] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetDataHotel().then
                (data => {
                    setHotel(data)
                })
        }, 500)
        return () => clearInterval(intervalId);
    }, [refresh])

    const router = useRouter();

    const {accountnumber,add_on_id,add_on_name,check_in,check_out,email,fullname,grand_total,payment_method,phone,total_discount,voucher_applied, booking_order_number, transaction_order_number, hotel_selected, voucher_applied_id} = router.query;

    const payment = payment_method.split('|');
    
    return(
        <Layout>
            <Container>
                <Row className='bg-white mt-3 mb-3'>
                    <p>Booking Order Number: {booking_order_number}</p>
                    <p>Transaction Number: {transaction_order_number}</p>
                    <p>Account Number: {accountnumber} | Pay with: {payment[1]} ( {payment[0]})</p>
                    <p>Check In : {check_in} | Check Out : {check_out}</p>
                    <p>Email: {email}</p>
                    <p>Full Name: {fullname}</p>
                    <p>Phone Number: {phone}</p>
                    <p>Hotel Selected: {hotel_selected}</p>
                    <p>Add On: {add_on_name.join(',')} (id: {add_on_id.join(',')})</p>
                    <p>Total Payment: {grand_total}</p>
                    <p>Total Discount Applied: {total_discount}</p>
                    <p>Voucher Applied: {voucher_applied} (id: {voucher_applied_id.join(',')})</p>
                </Row>
            </Container>
        </Layout>
    )

}
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Hotel from '../../../../src/api/booking/booking';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Layout from '@/src/components/layout';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HotelDetails(){
    const router = useRouter();

    const {id} = router.query;

    console.log({id});
    
    return(
        <Layout>   
            <Container>
                <Row>
                    <Col>
                        <p>Hello, World!</p>
                        <p>{id}</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}


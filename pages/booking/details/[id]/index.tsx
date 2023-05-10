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
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import React, {useRef} from 'react';


export default function HotelDetails(){
    const [hotel, setHotel] = useState<any[]>([])
    const [facility, setFacility] = useState<any[]>([])
    const [review, setReviews] = useState<any[]>([])
    const [voucher, setVoucher] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)
    // const [id, setId] = useState()
    // const router = useRouter()
    const [values, setValues] = useState({});
    const [values2, setValues2] = useState({});
    const [smShow, setSmShow] = useState(false);

    const router = useRouter();

    const {id} = router.query;

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetDataHotel().then
                (data => {
                    setHotel(data)
                })
        }, 2000)
        return () => clearInterval(intervalId);
    }, [refresh])

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetFacilitiesHotel().then
                (data => {
                    setFacility(data)
                })
        }, 2000)
        return () => clearInterval(intervalId);
    }, [refresh])

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetReviews().then
                (data => {
                    setReviews(data)
                })
        }, 2000)
        return () => clearInterval(intervalId);
    }, [refresh])

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetVoucherList().then
                (data => {
                    setVoucher(data)
                })
        }, 2000)
        return () => clearInterval(intervalId);
    }, [refresh])

    const hotelName = (id) => {
        let result = '';
        if(hotel[id] !== undefined){
            result = hotel[id-1].hotelName
        }
        return result
    }

    const hotelDescription = (id) => {
        let result = '';
        if(hotel[id] !== undefined){
            result = hotel[id-1].hotelDescription
        }
        return result
    }

    const hotelReviewStar = (id) => {
        let result = []
        for(let i = 0; i < review.length; i++){
            if(review[i]['horeHotel']['hotelId'] == id){
                result.push(review[i]['horeRating'])
            }
        }
        const sum = result.reduce((a, b) => a + b, 0);
        const avg = (sum / result.length) || 0;
        switch(avg){
            case 1:
                return ['/starorange2.png', '/stargrey2.png', '/stargrey2.png', '/stargrey2.png', '/stargrey2.png']
            case 2:
                return ['/starorange2.png', '/starorange2.png', '/stargrey2.png', '/stargrey2.png', '/stargrey2.png']
            case 3:
                return ['/starorange2.png', '/starorange2.png', '/starorange2.png', '/stargrey2.png', '/stargrey2.png']
            case 4:
                return ['/starorange2.png', '/starorange2.png', '/starorange2.png', '/starorange2.png', '/stargrey2.png']
            case 5:
                return ['/starorange2.png', '/starorange2.png', '/starorange2.png', '/starorange2.png', '/starorange2.png']
            default:
                return ['/stargrey2.png', '/stargrey2.png', '/stargrey2.png', '/stargrey2.png', '/stargrey2.png']
        }
    }

    const hotelReviewPercent = (id) => {
        let result = []
        let one_star = []
        let two_star = []
        let three_star = []
        let four_star = []
        let five_star = []
        for(let i = 0; i < review.length; i++){
            if(review[i]['horeHotel']['hotelId'] == id){
                result.push(review[i]['horeRating'])
            }
        }
        
        for(let i = 0; i < result.length; i++){
            if(result[i] == 1){
                one_star.push(1)
            }else if(result[i] == 2){
                two_star.push(2)
            }else if(result[i] == 3){
                three_star.push(3)
            }else if(result[i] == 4){
                four_star.push(4)
            }else if(result[i] == 5){
                five_star.push(5)
            }
        }

        const sum1 = one_star.reduce((a, b) => a + b, 0);
        const avg1 = (sum1 / result.length) || 0;
        const sum2 = two_star.reduce((a, b) => a + b, 0);
        const avg2 = (sum2 / result.length) || 0;
        const sum3 = three_star.reduce((a, b) => a + b, 0);
        const avg3 = (sum3 / result.length) || 0;
        const sum4 = four_star.reduce((a, b) => a + b, 0);
        const avg4 = (sum4 / result.length) || 0;
        const sum5 = five_star.reduce((a, b) => a + b, 0);
        const avg5 = (sum5/ result.length) || 0;
        
        return [avg1*20, avg2*20, avg3*20, avg4*20, avg5*20]
    }

    const hotelReviewCount = (id) => {
        let result = []
        for(let i = 0; i < review.length; i++){
            if(review[i]['horeHotel']['hotelId'] == id){
                result.push(review[i]['horeRating'])
            }
        }
        const sum = result.reduce((a, b) => a + b, 0);
        const avg = (sum / result.length) || 0;
        switch(avg){
            case 1:
                return `(${result.length} Reviews) Very Bad`
            break;
            case 2:
                return `(${result.length} Reviews) Bad`
            break;
            case 3:
                return `(${result.length} Reviews) Average`
            break;
            case 4:
                return `(${result.length} Reviews) Good`
            break;
            case 5:
                return `(${result.length} Reviews) Excellent`
            break;
        }
    }

    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const onFormChange2 = (e, updatedAt) => {
        const id = e.target.id;
        const value = e.target.value;
        let count = 0
        setValues2({ ...values2, [id]: {value, count: count+1} });
    };

    const inverseState = (id) => {
        // if(values2[1][id]['count']%2 == 0){

        // }
    }

    const bookSubmitHandler: FormEventHandler = (event) => {
        event.preventDefault();
        event.persist();
        // console.log('push data somewhere :)')
        console.log([values,values2]);
    };

    const currencyFormatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    const appliedVoucherList = () => {
        let vlid = []
        for(var prop in values2){
            vlid.push({'spofId': prop});
        }
        let results = voucher.filter(({ spofId: id1 }) => vlid.some(({ spofId: id2 }) => id2 == id1));
        return results
    }

    // console.log(voucher);

    const moneyToInt = (money) => {
        let without_rp = money.toString().slice(2)
        let remove_dot = without_rp.split('.').join('')
        let result = parseInt(remove_dot)
        return result
    }

    const moneyToInt2 = (money = 0) => {
        let without_rp = money.toString().slice(3)
        let remove_dot = without_rp.split('.').join('').slice(0,without_rp.length-3)
        let result = parseInt(remove_dot)
        return result
    }

    const getDiscountPrice = () => {
        let result = [0]
        for(let i = 0; i < appliedVoucherList().length; i++){
            result.push(moneyToInt(appliedVoucherList()[i]['spofDiscount']))
        }
        return result
    }

    // console.log(getDiscountPrice())

    const priceList = (id) => {
        for(let i = 0; i<facility.length; i++){
            if(facility[i]['faciHotel']['hotelId'] == id && facility[i]['faciMeasureUnit'] == 'Beds'){
                if(facility[i]['faciDiscount'] === 'Rp0'){
                    let disc = 0
                    for(let j = 0; j < getDiscountPrice().length; j++){
                        disc += getDiscountPrice()[j]
                    }
                    let real_price = moneyToInt(facility[i]['faciRatePrice']) + moneyToInt(facility[i]['faciTaxRate']) - disc
                    if(real_price>0){
                        return currencyFormatter.format(real_price)
                    }else{
                        return currencyFormatter.format(0)
                    }
                }else if(facility[i]['faciTaxRate'] === 'Rp0'){
                    let real_price = moneyToInt(facility[i]['faciRatePrice']) - moneyToInt(facility[i]['faciDiscount'])
                    return `${currencyFormatter.format(real_price)} <strike>${currencyFormatter.format(moneyToInt(facility[i]['faciRatePrice']))}</strike>`
                }
            }
        }
        if(facility[id] === undefined){
            return 'still loading';
        }
    }

    const hotelAminities = (id) => {
        let result = [];
        for(let i = 0; i<facility.length; i++){
            if(facility[i]['faciHotel']['hotelId'] == id){
                result.push(facility[i]['faciName']);
            }
        }
        return result
    }

    // console.log(getDiscountPrice());
    // console.log(hotelAminities(1));

    return(
        <Layout>   
            <Container>
                <Row>
                    <Col className='mt-5'>
                        <Carousel slide={false} style={{ maxWidth:500, maxHeight:500, margin:'auto'}}>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src="https://www.wartadepok.com/wp-content/uploads/2021/01/E3D1FA7E-88CB-484A-8811-B8E2900257E4.jpeg"
                                alt="First slide"
                                style={{ objectFit:'cover', borderRadius:10}}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                                alt="Second slide"
                                style={{ objectFit:'cover', borderRadius:10 }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block"
                                src="https://cdn0-production-images-kly.akamaized.net/83eNIr6NoNALbf0ukgz4tBEz1ko=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3386715/original/094552600_1614241094-Double_Tree_Jakarta.jpg"
                                alt="Third slide"
                                style={{ objectFit:'cover', borderRadius:10 }}
                                />
                            </Carousel.Item>
                        </Carousel>

                        <Row className='bg-white mt-3 mb-3' style={{ borderRadius:20 }}>
                            <Col>
                                <h1>{hotelName(id)}</h1>
                            </Col>
                            <Col style={{ textAlign:'right'}}>
                                <span><img src={hotelReviewStar(id)[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                <span><img src={hotelReviewStar(id)[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                <span><img src={hotelReviewStar(id)[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                <span><img src={hotelReviewStar(id)[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                <span><img src={hotelReviewStar(id)[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                <p>{hotelReviewCount(id)}</p>
                                <p></p>
                            </Col>
                            <Row>
                                <Row>
                                    <h3>Description</h3>
                                    <p>{hotelDescription(id)}</p>
                                </Row>
                                <Row>
                                    <h3>Aminities</h3>
                                    <p>{Array.from(hotelAminities(id)).map((_, faciItem) => (
                                        hotelAminities(id)[faciItem]
                                    )).join(', ')}</p>
                                </Row>
                                <Row>
                                    <h3>Rating & Reviews</h3>
                                    <Col style={{ textAlign:'center'}}>
                                        <span><img src={hotelReviewStar(id)[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        <span><img src={hotelReviewStar(id)[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        <span><img src={hotelReviewStar(id)[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        <span><img src={hotelReviewStar(id)[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        <span><img src={hotelReviewStar(id)[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        <p>{hotelReviewCount(id)}</p>
                                        <p></p>
                                    </Col>
                                    <Col>
                                        <ProgressBar now={hotelReviewPercent(id)[0]} style={{ maxWidth:300 }} label="1 Star"/>
                                        <br />
                                        <ProgressBar now={hotelReviewPercent(id)[1]} style={{ maxWidth:300 }} label='2 Star'/>
                                        <br />
                                        <ProgressBar now={hotelReviewPercent(id)[2]} style={{ maxWidth:300 }} label='3 Star'/>
                                        <br />
                                        <ProgressBar now={hotelReviewPercent(id)[3]} style={{ maxWidth:300 }} label='4 Star'/>
                                        <br />
                                        <ProgressBar now={hotelReviewPercent(id)[4]} style={{ maxWidth:300 }} label='5 Star'/>
                                        <br />
                                        {/* <span><img src='/starorange2.png' alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span> */}
                                    </Col>
                                </Row>
                            </Row>
                        </Row>
                    </Col>
                    <Col xs lg="3" className='mt-5 ml-1'>
                        <Card className='p-3'>
                            <Card.Header>
                                Book Form
                            </Card.Header>
                            <Card.Text>Price: {priceList(id)}</Card.Text>
                            <Form onSubmit={bookSubmitHandler}>
                                <Form.Group controlId='formCheckIn' className='mb-2'>
                                    <Form.Label>Check In</Form.Label>
                                    <Form.Control name='check_in' type='date' onChange={onFormChange}></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='formCheckOut' className='mb-2'>
                                    <Form.Label>Check Out</Form.Label>
                                    <Form.Control name='check_out' type='date' onChange={onFormChange}></Form.Control>
                                </Form.Group>
                                <Button onClick={() => setSmShow(true)} className="me-2">Select Vouchers</Button>
                                {(appliedVoucherList().length != 0)?
                                    <p>Voucher Applied: {Array.from(appliedVoucherList()).map((_,v)=>(
                                        appliedVoucherList()[v].spofDescription
                                    ).replace(/,/g, '')).join(', ')}</p>
                                : ''} 
                                <br /><hr />
                                <Button variant='success' type='submit'>Book Now</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Vouchers
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {Array.from(voucher).map((_, vouchers) => (
                            <Form.Check type='checkbox' name={voucher[vouchers].spofId} label={voucher[vouchers].spofName} id={voucher[vouchers].spofId} onChange={onFormChange2} onClick={inverseState(voucher[vouchers].spofId)}/>
                        ))}
                    </Modal.Body>
                </Modal>
        </Layout>
    );
}


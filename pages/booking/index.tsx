import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Hotel from '../../src/api/booking/booking';
// import {GetFacilitiesHotel} from '../../src/api/booking/booking';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import HotelDetails from './details/[id]';
// import HotelCheckout from './checkout';
import { useRouter } from 'next/router'
import $ from 'jquery'; 
import Modal from 'react-bootstrap/Modal';

function Booking() {
    const [hotel, setHotel] = useState<any[]>([])
    const [facility, setFacility] = useState<any[]>([])
    const [facility2, setFacility2] = useState<any[]>([])
    const [facilitycategory, setFacilityCategory] = useState<any[]>([])
    const [review, setReviews] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)
    const [id, setId] = useState()
    const router = useRouter()
    const [values, setValues] = useState({});
    const [valuesfacility, setValuesFacility] = useState([]);
    const [valuesfacility2, setValuesFacility2] = useState({});
    const [categoryFilters, setcategoryFilters] = useState(new Set());
    const [checkedState, setCheckedState] = useState([])
    const [show, setShow] = useState(false);

    function updateFilters(checked, categoryFilter) {
        if (checked)
        setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
        setcategoryFilters((prev) => {
            const next = new Set(prev);
            next.delete(categoryFilter);
            return next;
        });
    }

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
            Hotel.GetFacilitiesCategory().then
                (data => {
                    setFacilityCategory(data)
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

    // console.log(facility)

    useEffect(() => {
        setCheckedState(Array(facility.length).fill(false))
    },[facility.length])

    const appliedHotelFacility = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);

        let a=[]
        let b=[]
        const hotelFacilities = updatedCheckedState.reduce(
        (sum, currentState, index) => {
            if (currentState === true) {
                a.push(FacilityCategory()[index])
                // b.push(facility[index].faciName)
                // return sum + moneyToInt(facility[index].spofDiscount);
            } else if (currentState === false) {
                a.slice(index, index+1)
                // b.slice(index, index+1)
            }
            // return sum;
        },0);
        setValuesFacility(a)
        // setValuesFacility2(b)
        // setTotal(totalPrice);
    };

    // console.log(valuesfacility2)

    const currencyFormatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });

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

    const priceList = (id) => {
        for(let i = 0; i<facility.length; i++){
            if(facility[i]['faciHotel']['hotelId'] == id && facility[i]['faciMeasureUnit'] == 'Beds'){
                if(facility[i]['faciDiscount'] === 'Rp0'){
                    let real_price = moneyToInt(facility[i]['faciRatePrice']) 
                    // - moneyToInt(facility[i]['faciTaxRate'])
                    return currencyFormatter.format(real_price)
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

    const hotelReview = (id) => {
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
                return `(${avg}) Very Bad`
            break;
            case 2:
                return `(${avg}) Bad`
            break;
            case 3:
                return `(${avg}) Average`
            break;
            case 4:
                return `(${avg}) Good`
            break;
            case 5:
                return `(${avg}) Excellent`
            break;
        }
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

    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const hotelAminities = (id) => {
        let result = [];
        for(let i = 0; i<facility.length; i++){
            if(facility[i]['faciHotel']['hotelId'] == id){
                result.push(facility[i]['faciName']);
            }
        }
        return result
    }
    
    // const submitHandler: FormEventHandler = (event) => {
    // event.preventDefault();
    // event.persist();
    // console.log(values);
    // };

    const hotelFilter = () =>{
        let result = [];
        for(let i = 0; i<hotel.length; i++) {
            for(let j = 0; j<facility.length; j++) {
                if(moneyToInt2(priceList(hotel[i]['hotelId'])) >= values.minPrice && moneyToInt2(priceList(hotel[i]['hotelId'])) <= values.maxPrice && facility[j]['faciMeasureUnit'] == 'Beds') {
                    result.push(hotel[i]);
                }
            }
        }
        return result;
    }

    const cats = hotelFilter().map(q => q);
    let filteredHotel = cats.filter((q, idx) => cats.indexOf(q) === idx)

    const hotelFilter2 = () =>{
        let result = [];
        for(let k = 0; k<valuesfacility.length; k++) {
            for(let i = 0; i<hotel.length; i++){
                for(let j = 0; j<facility.length; j++) {
                    if(facility.find(e => e.faciCagro.cagroName == valuesfacility[k])) {
                        if(facility[j]['faciHotel']['hotelId'] == hotel[i]['hotelId']) {
                            result.push(hotel[i]);
                        }
                }
            }
        }
        }
        return result;
    }

    const cats2 = hotelFilter2().map(q => q);
    let filteredHotel2 = cats2.filter((q, idx) => cats2.indexOf(q) === idx)

    const FacilityCategory = () => {
        let result = []
        for(let i=0; i<facility.length; i++){
            if(result.indexOf(facility[i]['faciCagro']['cagroName']) === -1) {
                result.push(facility[i]['faciCagro']['cagroName']);
            }
        }
        return result;
    }
    // console.log(FacilityCategory())
    
    return (
        <Container>
            <Row>
                <Col xs lg="2" className='mt-5'>
                    <Card>
                        <Card.Header>Filter</Card.Header>
                        {/* <Form onSubmit={submitHandler}> */}
                        <Form>
                            <Form.Group className="mb-3 mt-2" controlId="minPrice">
                                <Col className='mx-2'>
                                    <Form.Label>Minimum Price</Form.Label>
                                    <Form.Control type="text" placeholder="Minimum" name='minPrice' onChange={onFormChange}/>
                                </Col>
                            </Form.Group>
                            <hr></hr>
                            <Form.Group className="mb-3 mt-0" controlId="maxPrice">
                                <Col className='mx-2'>
                                    <Form.Label>Maximum Price</Form.Label>
                                    <Form.Control type="text" placeholder="Maximum" name='maxPrice' onChange={onFormChange}/>
                                </Col>
                            </Form.Group>
                            <hr></hr>
                            <Col className='mx-2'>
                                <p className='mx-1 mb-2' muted>
                                    Hotel Facilities
                                </p>
                                {Array.from(new Set(FacilityCategory())).map((_, index) => (
                                    <Form key={index}>
                                        <Form.Group className="mb-3" controlId={ FacilityCategory()[index]+'control' }>
                                            <Form.Check type="checkbox" label={ FacilityCategory()[index] } name={ FacilityCategory()[index] } onChange={()=>appliedHotelFacility(index)}/>
                                        </Form.Group>
                                    </Form>
                                ))}
                            </Col>
                            {/* <hr></hr>
                            <Button variant="primary" type="submit" className='mb-2 ml-2'>
                                Apply
                            </Button> */}
                        </Form>
                    </Card>
                </Col>
                <Col>   
                    <Row xs={1} md={2} className="my-5 mx-2">
                        {(hotelFilter2().length == 0 && hotelFilter().length == 0 ? Array.from(hotel).map((_, hotelItem) => (
                                <Col key={hotelItem}>
                                <Card className='mb-4'>
                                    <Card.Img className='mt-2' style={{ maxWidth: 400, maxHeight: 400, margin: 'auto' }} variant="top" src="https://www.wartadepok.com/wp-content/uploads/2021/01/E3D1FA7E-88CB-484A-8811-B8E2900257E4.jpeg" />
                                    <Card.Body>
                                    <Card.Title>{hotel[hotelItem]['hotelName']} ({hotel[hotelItem]['hotelRatingStar']}&#9733;)</Card.Title>
                                    <Card.Text>
                                        {hotel[hotelItem]['hotelAddr']['addrLine1']}
                                    </Card.Text>
                                    <Card.Text>
                                        {hotel[hotelItem]['hotelDescription']}
                                    </Card.Text>
                                    <Card.Text>
                                        Facilities : {Array.from(hotelAminities(hotel[hotelItem]['hotelId'])).map((_, faciItem) => (
                                        hotelAminities(hotel[hotelItem]['hotelId'])[faciItem]
                                    )).join(', ')}
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Guest Ratings:
                                            <span><img src={hotelReviewStar(hotel[hotelItem]['hotelId'])[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(hotel[hotelItem]['hotelId'])[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(hotel[hotelItem]['hotelId'])[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(hotel[hotelItem]['hotelId'])[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(hotel[hotelItem]['hotelId'])[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                        Contact : {hotel[hotelItem]['hotelPhonenumber']}
                                    </Card.Text>
                                    <Card.Text>
                                        Price: {priceList(hotel[hotelItem]['hotelId'])}
                                    </Card.Text>
                                    <Button href={`/booking/details/${hotel[hotelItem]['hotelId']}`} variant='info'>Details</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                            )
                        ) : (filteredHotel2.length == 0 ? Array.from(filteredHotel).map((_, hotelItem) => (
                                <Col key={hotelItem}>
                                    <Card className='mb-4'>
                                        <Card.Img className='mt-2' style={{ maxWidth: 400, maxHeight: 400, margin: 'auto' }} variant="top" src="https://www.wartadepok.com/wp-content/uploads/2021/01/E3D1FA7E-88CB-484A-8811-B8E2900257E4.jpeg" />
                                        <Card.Body>
                                        <Card.Title>{filteredHotel[hotelItem]['hotelName']} ({filteredHotel[hotelItem]['hotelRatingStar']}&#9733;)</Card.Title>
                                        <Card.Text>
                                            {filteredHotel[hotelItem]['hotelAddr']['addrLine1']}
                                        </Card.Text>
                                        <Card.Text>
                                            {filteredHotel[hotelItem]['hotelDescription']}
                                        </Card.Text>
                                        <Card.Text>
                                            Facilities : {Array.from(hotelAminities(filteredHotel[hotelItem]['hotelId'])).map((_, faciItem) => (
                                            hotelAminities(filteredHotel[hotelItem]['hotelId'])[faciItem]
                                        )).join(', ')}
                                        </Card.Text>
                                        {/* <Card.Text>
                                            <p>Guest Ratings: {reviewList(hotel[hotelItem]['hotelId'])}</p>
                                        </Card.Text> */}
                                        <Card.Text>
                                            <p>Guest Ratings:
                                                <span><img src={hotelReviewStar(filteredHotel[hotelItem]['hotelId'])[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(filteredHotel[hotelItem]['hotelId'])[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(filteredHotel[hotelItem]['hotelId'])[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(filteredHotel[hotelItem]['hotelId'])[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(filteredHotel[hotelItem]['hotelId'])[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            </p>
                                        </Card.Text>
                                        <Card.Text>
                                            Contact : {filteredHotel[hotelItem]['hotelPhonenumber']}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: {priceList(filteredHotel[hotelItem]['hotelId'])}
                                        </Card.Text>
                                        <Button href={`/booking/details/${filteredHotel[hotelItem]['hotelId']}`} variant='info'>Details</Button>
                                        {' '}
                                        {/* <Button variant="primary">Book Now</Button>{' '} */}
                                        </Card.Body>
                                    </Card>
                                    </Col>
                            ))
                        : Array.from(filteredHotel2).map((_, hotelItem) => (
                            <Col key={hotelItem}>
                                <Card className='mb-4'>
                                    <Card.Img className='mt-2' style={{ maxWidth: 400, maxHeight: 400, margin: 'auto' }} variant="top" src="https://www.wartadepok.com/wp-content/uploads/2021/01/E3D1FA7E-88CB-484A-8811-B8E2900257E4.jpeg" />
                                    <Card.Body>
                                    <Card.Title>{filteredHotel2[hotelItem]['hotelName']} ({filteredHotel2[hotelItem]['hotelRatingStar']}&#9733;)</Card.Title>
                                    <Card.Text>
                                        {filteredHotel2[hotelItem]['hotelAddr']['addrLine1']}
                                    </Card.Text>
                                    <Card.Text>
                                        {filteredHotel2[hotelItem]['hotelDescription']}
                                    </Card.Text>
                                    <Card.Text>
                                        Facilities : {Array.from(hotelAminities(filteredHotel2[hotelItem]['hotelId'])).map((_, faciItem) => (
                                        hotelAminities(filteredHotel2[hotelItem]['hotelId'])[faciItem]
                                    )).join(', ')}
                                    </Card.Text>
                                    {/* <Card.Text>
                                        <p>Guest Ratings: {reviewList(hotel[hotelItem]['hotelId'])}</p>
                                    </Card.Text> */}
                                    <Card.Text>
                                        <p>Guest Ratings:
                                            <span><img src={hotelReviewStar(filteredHotel2[hotelItem]['hotelId'])[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(filteredHotel2[hotelItem]['hotelId'])[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(filteredHotel2[hotelItem]['hotelId'])[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(filteredHotel2[hotelItem]['hotelId'])[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                            <span><img src={hotelReviewStar(filteredHotel2[hotelItem]['hotelId'])[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                        Contact : {filteredHotel2[hotelItem]['hotelPhonenumber']}
                                    </Card.Text>
                                    <Card.Text>
                                        Price: {priceList(filteredHotel2[hotelItem]['hotelId'])}
                                    </Card.Text>
                                    <Button href={`/booking/details/${filteredHotel2[hotelItem]['hotelId']}`} variant='info'>Details</Button>
                                    {' '}
                                    {/* <Button variant="primary">Book Now</Button>{' '} */}
                                    </Card.Body>
                                </Card>
                                </Col>
                        )) 
                        )
                        )
                        }
                    </Row>
                </Col>
            </Row>
            <Modal
                show={show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                I will not close if you click outside me. Don not even try to press
                escape key.
                </Modal.Body>
            </Modal>
        </Container>
  );
}

export default Booking;
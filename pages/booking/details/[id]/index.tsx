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
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from 'next/link'
import { useFormik, FormikProvider } from "formik";
import { AddBookingDetailExtraRequest, AddBookingDetailRequest, AddBookingRequest, AddSpecialVoucherCouponsRequest, GetBookingRequest } from '@/src/redux/action/booking/bookingActions';
import { useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';

export default function HotelDetails(){
    const [hotel, setHotel] = useState<any[]>([])
    const [facility, setFacility] = useState<any[]>([])
    const [review, setReviews] = useState<any[]>([])
    const [userreview, setUserReviews] = useState<any[]>([])
    const [voucher, setVoucher] = useState<any[]>([])
    const [priceItems, setPriceItems] = useState<any[]>([])
    const [paymentMethod, setPaymentMethod] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)
    const [values, setValues] = useState({});
    const [values2, setValues2] = useState({});
    const [values3, setValues3] = useState({});
    const [smShow, setSmShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [food, setFood] = useState([]);
    const [service, setService] = useState([]);
    const [others, setOthers] = useState([]);
    const [addon, setAddOn] = useState([]);
    const [selectedpayment, setSelectedPayment] = useState([]);
    const [fullscreen, setFullscreen] = useState(true);
    const [formvalues, setFormValues] = useState({});
    const [checkedState, setCheckedState] = useState([])
    const [totalDiscount, setTotal] = useState(0);
    const [bookingList, setBookingList] = useState([]);
    const [bookingListDetail, setBookingListDetail] = useState([]);

    const dispatch = useDispatch();

    const router = useRouter();

    const {id} = router.query;

    let currentDate = new Date();

    useEffect(() => {
        setCheckedState(Array(voucher.length).fill(false))
    },[voucher.length])

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetDataHotel().then
                (data => {
                    setHotel(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetFacilitiesHotel().then
                (data => {
                    setFacility(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetReviews().then
                (data => {
                    setReviews(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetUserReviews().then
                (data => {
                    setUserReviews(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    // console.log(userreview)

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetVoucherList().then
                (data => {
                    setVoucher(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            Hotel.GetPriceItems().then
                (data => {
                    setPriceItems(data)
                })
        }, 2000)
        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        // const intervalId = setInterval(() => {
            Hotel.GetPaymentMethods().then
                (data => {
                    setPaymentMethod(data)
                })
        // }, 2000)
        // return () => clearInterval(intervalId);
    }, [])

    useEffect(()=>{
        Hotel.GetData().then
        (data => {
            setBookingList(data)
        })
    },[])

    useEffect(()=>{
        Hotel.GetDataDetail().then
        (data => {
            setBookingListDetail(data)
        })
    },[])

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

        const avg1 = (one_star.length / result.length)*100;
        const avg2 = (two_star.length / result.length)*100;
        const avg3 = (three_star.length / result.length)*100;
        const avg4 = (four_star.length / result.length)*100;
        const avg5 = (five_star.length / result.length)*100;

        // const sum1 = one_star.reduce((a, b) => a + b, 0);
        // const avg1 = (sum1 / result.length) || 0;
        // const sum2 = two_star.reduce((a, b) => a + b, 0);
        // const avg2 = (sum2 / result.length) || 0;
        // const sum3 = three_star.reduce((a, b) => a + b, 0);
        // const avg3 = (sum3 / result.length) || 0;
        // const sum4 = four_star.reduce((a, b) => a + b, 0);
        // const avg4 = (sum4 / result.length) || 0;
        // const sum5 = five_star.reduce((a, b) => a + b, 0);
        // const avg5 = (sum5/ result.length) || 0;
        
        // console.log(sum3)
        // console.log(avg1, avg2, avg3, avg4, avg5)
        return [avg1, avg2, avg3, avg4, avg5]
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
        setValues2({ ...values2, [id]: value});
    };

    const onDetailBookingFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({ ...formvalues, [name]: value });
    };

    const bookSubmitHandler: FormEventHandler = (event) => {
        event.preventDefault();
        event.persist();
    };

    const currencyFormatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    const appliedVoucherList = () => {
        let vlid = []
        for(let i = 0; i < values3.length; i++) {
            vlid.push({'spofId': values3[i]});
        }
        let results = voucher.filter(({ spofId: id1 }) => vlid.some(({ spofId: id2 }) => id2 == id1));
        return results
    }

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

    // console.log(voucher)
    const appliedVoucherList2 = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);

        let a=[]
        const totalPrice = updatedCheckedState.reduce(
        (sum, currentState, index) => {
            if (currentState === true) {
                a.push(voucher[index].spofId)
                return sum + moneyToInt(voucher[index].spofDiscount);
            } else if (currentState === false) {
                a.slice(index, index+1)
            }
            return sum;
        },0);
        setValues3(a)
        setTotal(totalPrice);
    };

    const priceList = (id) => {
        for(let i = 0; i<facility.length; i++){
            if(facility[i]['faciHotel']['hotelId'] == id && facility[i]['faciMeasureUnit'] == 'Beds'){
                if(facility[i]['faciDiscount'] === 'Rp0'){
                    let disc = 0
                    let real_price = moneyToInt(facility[i]['faciRatePrice']) + moneyToInt(facility[i]['faciTaxRate']) - totalDiscount + addOnPriceTotal()
                    if(real_price>0){
                        return [currencyFormatter.format(real_price),facility[i]['faciTaxRate']];
                    }else{
                        return [currencyFormatter.format(0),facility[i]['faciTaxRate']]
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

    const priceItemLists = () => {
        let foodsnack = ['select'];
        let facilityservice = ['select'];
        let priceitemsothers = ['select'];
        for(let i = 0; i<priceItems.length; i++){
            if(priceItems[i]['pritType'] == 'SERVICE' || priceItems[i]['pritType'] == 'FACILITY'){
                facilityservice.push(priceItems[i])
            }else if(priceItems[i]['pritType'] == 'FOOD' || priceItems[i]['pritType'] == 'SOFTDRINK' || priceItems[i]['pritType'] == 'SNACK'){
                foodsnack.push(priceItems[i]);
            }else{
                priceitemsothers.push(priceItems[i]);
            }
        }
        return ([foodsnack, facilityservice, priceitemsothers])
    }

    const addOnAdded = () => {
        let result = [];
        let resultId = [];
        for(let i = 1; i<addon.length; i++){
            let a = addon[i].split(' | ');
            result.push(a[1]);
            resultId.push(a[0]);
        }
        return [result, resultId]
    }

    const addOnDetail = () => {
        let result = [];
        for(let i = 0; i<addOnAdded()[1].length; i++){
            for(let j = 0; j<priceItems.length; j++){
                if(priceItems[j]['pritId'] == addOnAdded()[1][i]){
                    result.push(priceItems[j]);
                }
            }
        }
        return result
    }

    const addOnPriceTotal = () => {
        let result = 0
        for(let i=0; i<addOnDetail().length; i++){
            result += moneyToInt(addOnDetail()[i]['pritPrice'])
        }
        return result
    }

    const paymentMethodSeparator = () => {
        let bank = []
        let gateway = []
        for(let i = 0; i < paymentMethod.length; i++){
            if(paymentMethod[i]['paymentGateway'] == null){
                bank.push(paymentMethod[i]);
            }else if(paymentMethod[i]['bank'] == null){
                gateway.push(paymentMethod[i]);
            }
        }
        return [bank, gateway];
    }

    let hotelSelected = (id) => {
        return hotel[id-1]
    }

    const GatherAllData = () => {
        return (
            {
                "fullname": formvalues['fullname'],
                "email": formvalues['email'],
                "phone": formvalues['phone'],
                "accountnumber": formvalues['accountnumber'],
                "check_in": values.check_in,
                "check_out": values.check_out,
                "voucher_applied_id": values3,
                "voucher_applied": Array.from(appliedVoucherList()).map((_,v)=>(
                    appliedVoucherList()[v].spofDescription
                ).replace(/,/g, '')).join(', '),
                "total_discount": currencyFormatter.format(totalDiscount),
                "payment_method": selectedpayment,
                "add_on_id": addOnAdded()[1],
                "add_on_name": addOnAdded()[0],
                "grand_total": priceList(id),
                "booking_order_number": `BO#${currentDate.getFullYear()}${currentDate.getMonth()+1}${currentDate.getDate()}-${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${currentDate.getMilliseconds()}`,
                "transaction_order_number": `TRX#${currentDate.getFullYear()}${currentDate.getMonth()+1}${currentDate.getDate()}-${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${currentDate.getMilliseconds()}`,
                "hotel_selected": hotelName(id)
            }
        )
    }

    let selectedPayment = ()=>selectedpayment.split('|')[0]

    const finalActionToAddBooking = () => {
        let payload = {
                    // boorId: 21,
                    boorOrderNumber: GatherAllData().booking_order_number,
                    boorOrderDate: `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
                    boorArrivalDate: GatherAllData().check_in,
                    boorTotalRoom: 1,
                    boorTotalGuest: 2,
                    boorDiscount: moneyToInt2(GatherAllData().total_discount),
                    boorTotalTax: ((moneyToInt2(priceList(id))*10)/100),
                    boorTotalAmount: moneyToInt2(priceList(id)),
                    boorDownPayment: 0,
                    boorPayType: (selectedPayment().length === 4 ? "PG" : "C"),
                    boorIsPaid: "P",
                    boorType: "Individual",
                    boorCardnumber: `${(GatherAllData().accountnumber).toString()}`,
                    boorMemberType: "-",
                    boorStatus: "BOOKING",
                    boorUserId: 1,
                    boorHotel: parseInt(id),
                };
        dispatch(AddBookingRequest(payload))
    }

    const getFaciDataFromHotelRelation = () => {
        for(let i = 0; i < facility.length; i++) {
            if(facility[i]['faciHotel']['hotelId'] == id && facility[i]['faciMeasureUnit'] == 'Beds'){
                return {
                    'faciId': facility[i]['faciId'],
                    'faciMaxNumber': facility[i]['faciMaxNumber'],
                    'faciRatePrice': moneyToInt(facility[i]['faciRatePrice']),
                    'faciDiscount': moneyToInt(facility[i]['faciDiscount']),
                    'faciTaxRate': moneyToInt(facility[i]['faciTaxRate']),
                    'faciExtra': addOnPriceTotal(),
                    'faciSubtotal': moneyToInt(facility[i]['faciRatePrice'])+addOnPriceTotal()-moneyToInt(facility[i]['faciDiscount'])+moneyToInt(facility[i]['faciTaxRate'])
                };
            }
        }
    }

    const finalActionToAddBookingDetail = () => {
        let payload = {
            borderBoorId: bookingList[bookingList.length],
            // bordeId: number,
            bordeCheckin: values.check_in,
            bordeCheckout: values.check_out,
            bordeAdults: getFaciDataFromHotelRelation()?.faciMaxNumber,
            bordeKids: 0,
            bordePrice: getFaciDataFromHotelRelation()?.faciRatePrice,
            bordeExtra: getFaciDataFromHotelRelation()?.faciExtra,
            bordeDiscount: getFaciDataFromHotelRelation()?.faciDiscount,
            bordeTax: getFaciDataFromHotelRelation()?.faciTaxRate,
            bordeSubtotal: getFaciDataFromHotelRelation()?.faciSubtotal,
            bordeFaci: getFaciDataFromHotelRelation()?.faciId,
        }
        dispatch(AddBookingDetailRequest(payload))
    }
    
    const finalActionToAddBookingDetailExtra = () => {
        let boex_qty = 1
        for(let i = 0; i < addOnAdded()[1].length; i++) {
            if(addOnAdded()[1][i] == addOnDetail()[i]['pritId']){
                let payload = {
                    // boexId: number,
                    boexPrice: moneyToInt(addOnDetail()[i]['pritPrice']),
                    boexQty: boex_qty,
                    boexSubtotal: moneyToInt(addOnDetail()[i]['pritPrice'])*boex_qty,
                    boexMeasureUnit: (addOnDetail()[i]['pritType'] == 'FACILITY') ? 'People' : 'Unit',
                    boexPrit: addOnDetail()[i]['pritId'],
                    boexBorde: bookingListDetail[bookingListDetail.length - 1],
                }
                dispatch(AddBookingDetailExtraRequest(payload))
            }
        }
    }

    // console.log(voucher)

    const finalActionToAddSpecialOfferCoupons = () => {
        for(let i = 0; i < values3.length; i++) {
            for(let j = 0; j < voucher.length; j++) {
                if(voucher[j]['spofId'] == values3[i]){
                    let payload = {
                        // socoId: socoId,
                        socoSpof: values3[i],
                        socoBorde: bookingListDetail[bookingListDetail.length - 1],
                    }
                    dispatch(AddSpecialVoucherCouponsRequest(payload))
                }
            }
        }
    }

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    const passData = () => {
        finalActionToAddBooking()
        sleep(1000)
        finalActionToAddBookingDetail()
        sleep(1000)
        finalActionToAddBookingDetailExtra()
        sleep(1000)
        finalActionToAddSpecialOfferCoupons()

        // console.log(GatherAllData().add_on_id)

        sleep(1000)

        router.push({
            pathname: '/booking/checkout',
            query: GatherAllData()
        }, '/booking/checkout')
    }

    const deleteAddOn = (id,name) => {
        // console.log(id,name)
        for(let i = 0; i < addon.length; i++) {
            if(addon[i].includes(id) && addon[i].includes(name)){
                addon.splice(i,1);
            }
        }
    }

    const userReview = (id) => {
        let result = []
        for(let i = 0; i < userreview.length; i++){
            if(userreview[i]['hotel_id'] == id){
                result.push(userreview[i])
            }
        }
        return result
    }

    const hotelReviewDisplay = (id) => {
        let result = []
        for(let i = 0; i < review.length; i++){
            if(review[i]['horeHotel']['hotelId'] == id){
                result.push(review[i])
            }
        }
        return result
    }

    const censoredName = (name) => {
        let arr = name.split(' ');
        let result = []
        for(let i = 0; i < arr.length; i++){
            result.push(arr[i].replace(/(\w{1})[\w.-]/, "*****"))
        }
        // console.log(result)
        return result.join(' ').split(' ').slice(0,1).join(' ');
    }

    // console.log(formvalues)

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
                                    <Col>
                                        <Row>
                                            <Col style={{ textAlign:'center'}}>
                                                <span><img src={hotelReviewStar(id)[0]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(id)[1]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(id)[2]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(id)[3]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <span><img src={hotelReviewStar(id)[4]} alt="" style={{ maxHeigh:20, maxWidth:20, display:'inline' }}/></span>
                                                <p>{hotelReviewCount(id)}</p>
                                                <p></p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {Array.from(userReview(id)).map((_,data)=>(
                                                <Col style={{ borderRadius:10, backgroundColor:'lightgray', margin:10 }} key={userReview(id)[data]['hotel_id']}>
                                                    <p>User Name: {censoredName(userReview(id)[data]['user_full_name'])}</p>
                                                    <p>User Rating: {userReview(id)[data]['hore_rating']}&#9733;</p>
                                                    <p>User Review: {userReview(id)[data]['hore_user_review']}</p>
                                                </Col>
                                            ))}
                                            {/* {Array.from(hotelReviewDisplay(id)).map((_,data)=>(
                                                <Col style={{ borderRadius:10, backgroundColor:'lightgray', margin:10 }} key={hotelReviewDisplay(id)[data]['horeId']}>
                                                    <p>User ID: {hotelReviewDisplay(id)[data]['horeUserId']}</p>
                                                    <p>User Rating: {hotelReviewDisplay(id)[data]['horeRating']}&#9733;</p>
                                                    <p>User Review: {hotelReviewDisplay(id)[data]['horeUserReview']}</p>
                                                </Col>
                                            ))} */}
                                        </Row>
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
                            <Card.Text>Price: {currencyFormatter.format(moneyToInt2(priceList(id)[0])-moneyToInt(priceList(id)[1]))}<br></br>
                            <small>Tax: {currencyFormatter.format(moneyToInt(priceList(id)[1]))}</small>
                            </Card.Text>
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
                                <Button onClick={
                                    (values.check_in == undefined || values.check_out == undefined) ? ()=>{alert("Please fill both check in and check out date")} : 
                                ()=>setShow2(true)} variant='success' type='submit'>Book Now</Button>
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
                        {/* {Array.from(voucher).map((_, vouchers) => (
                            <Form.Check type='checkbox' name={voucher[vouchers].spofId} label={voucher[vouchers].spofName} id={voucher[vouchers].spofId} onChange={onFormChange2} onClick={inverseState(voucher[vouchers].spofId)}/>
                        ))} */}
                        <ul style={{ listStyle:'none',padding:0 }}>
                        {voucher.map(({spofName, spofDiscount, spofId},index) => {
                            return(
                            <li key={index}>
                                <div className='left-section'>
                                    <input type="checkbox" id={spofId} name={spofId} value={spofId} checked={checkedState[index]} onChange={()=>appliedVoucherList2(index)} onClick={onFormChange2}/>
                                    <label htmlFor={spofId}>{spofName}</label>
                                </div>
                                <div className='right-section'>{spofDiscount}</div>
                            </li>
                            )
                        })}
                        </ul>
                    </Modal.Body>
                </Modal>
                <Modal size="sm" show={show2} onHide={() => setShow2(false)} fullscreen={fullscreen} aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">Modify Your Booking</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header>Booking Information</Card.Header>
                                    <Form className='p-3'>
                                        <h2>1. Enter your details</h2>
                                        <Card.Text>We will use these details to share your booking information</Card.Text>
                                        {/* <Form.Group className=''>
                                            <Form.Control type="hidden" name='hotel_name' onChange={onDetailBookingFormChange}>{hotel[id]['hotelName']}</Form.Control>
                                        </Form.Group> */}
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name" name='fullname' onChange={onDetailBookingFormChange}></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="E-Mail" name='email' onChange={onDetailBookingFormChange}></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control  type="number" placeholder="Mobile or Phone Number" name='phone' onChange={onDetailBookingFormChange}></Form.Control>
                                        </Form.Group>
                                        <hr />
                                        <h2>2. Complete your booking</h2>
                                        <Form.Group>
                                            <Form.Label className='mr-2'>Food and Snack Add-On:</Form.Label>
                                            <select
                                                // onChange={(e) => setFood(e.target.id)}
                                                // onChange={}
                                                onClick={(e)=> ((!addon.includes(e.currentTarget.value))?addon.push(e.currentTarget.value):'', setFood(e.currentTarget.value))}
                                                defaultValue={food}>
                                                {priceItemLists()[0].map((option,idx) => (
                                                    <option id={priceItemLists()[0][idx]['pritId']} key={priceItemLists()[0][idx]['pritId']}>{priceItemLists()[0][idx]['pritId']}<p>{' | '}{priceItemLists()[0][idx]['pritName']}</p></option>
                                                ))}
                                            </select>
                                            {/* <DropdownButton as={ButtonGroup} key='info' id='info' variant='info' title='Food and Snack Add-On' onChange={(e)=>setFood(e.target.value)} defaultValue={food}>
                                                {Array.from(priceItemLists()[0]).map((_,food)=>(
                                                    <Dropdown.Item key={priceItems[food]['pritId']}>{priceItems[food]['pritName']}</Dropdown.Item>
                                                ))}
                                            </DropdownButton> */}
                                        </Form.Group><br></br>
                                        <Form.Group>
                                            <Form.Label className='mr-2'>Facility and Service Add-On:</Form.Label>
                                            <select
                                                // onChange={}
                                                onClick={(e)=> ((!addon.includes(e.currentTarget.value))?addon.push(e.currentTarget.value):'', setService(e.currentTarget.value))}
                                                defaultValue={service}>
                                                {priceItemLists()[1].map((option,idx) => (
                                                    <option id={priceItemLists()[1][idx]['pritId']} key={priceItemLists()[1][idx]['pritId']}>{priceItemLists()[1][idx]['pritId']}<p>{' | '}{priceItemLists()[1][idx]['pritName']}</p></option>
                                                ))}
                                            </select>
                                        </Form.Group><br></br>
                                        <Form.Group>
                                            <Form.Label className='mr-2'>Other Add-On:</Form.Label>
                                            <select
                                                // onChange={}
                                                onClick={(e)=> ((!addon.includes(e.currentTarget.value))?addon.push(e.currentTarget.value):'', setOthers(e.currentTarget.value))}
                                                defaultValue={others}>
                                                {priceItemLists()[2].map((option,idx) => (
                                                    <option id={priceItemLists()[2][idx]['pritId']} key={priceItemLists()[2][idx]['pritId']}>{priceItemLists()[2][idx]['pritId']}<p>{' | '}{priceItemLists()[2][idx]['pritName']}</p></option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Label>Add On Items Added: {addOnAdded()[0].join(', ')}</Form.Label>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Add On</th>
                                                    {/* <th>Last Name</th> */}
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {addOnAdded()[0].map((_,index)=> (
                                                    <tr key={addOnAdded()[1][index]}>
                                                        <td key={addOnAdded()[1][index]}>{addOnAdded()[1][index]}</td>
                                                        <td key={addOnAdded()[0][index]}>{addOnAdded()[0][index]}</td>
                                                        <td><Button variant='danger' onClick={()=>deleteAddOn(addOnAdded()[1][index],addOnAdded()[0][index])}>Delete</Button></td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </Table>
                                        <hr />
                                        <h2>3. Payment</h2>
                                        <Form.Group>
                                            <Form.Label className='mr-2'>Bank:</Form.Label>
                                            <select
                                                onClick={(e) => setSelectedPayment(e.target.value)}
                                                defaultValue={others}>
                                                {paymentMethodSeparator()[0].map((option,idx) => (
                                                    <option id={paymentMethodSeparator()[0][idx]['bank']['bankEntityId']} key={paymentMethodSeparator()[0][idx]['bank']['bankEntityId']}>{paymentMethodSeparator()[0][idx]['bank']['bankCode']}<p>{' | '}{paymentMethodSeparator()[0][idx]['bank']['bankName']}</p></option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='mr-2'>E-Money:</Form.Label>
                                            <select
                                                onClick={(e) => setSelectedPayment(e.target.value)}
                                                defaultValue={others}>
                                                {paymentMethodSeparator()[1].map((option,idx) => (
                                                    <option id={paymentMethodSeparator()[1][idx]['paymentGateway']['pagaEntityId']} key={paymentMethodSeparator()[1][idx]['paymentGateway']['pagaEntityId']}>{paymentMethodSeparator()[1][idx]['paymentGateway']['pagaEntityId']}<p>{' | '}{paymentMethodSeparator()[1][idx]['paymentGateway']['pagaName']}</p></option>
                                                ))}
                                            </select>
                                        </Form.Group>
                                        <Form.Label>Selected Payment Method: {selectedpayment}</Form.Label>
                                        {(selectedpayment.length == 0 ? '' : 
                                            <Form.Group>
                                                <Form.Label>Account Payment</Form.Label>
                                                <Form.Control  type="number" placeholder="Account Payment Number" name='accountnumber' onChange={onDetailBookingFormChange}></Form.Control>
                                            </Form.Group>
                                        )}
                                        <hr />
                                        <Button variant='success' 
                                        // href={`/booking/checkout/${GatherAllData()}`}
                                        // onClick={(formvalues.fullname == undefined || formvalues.email == undefined || formvalues.accountnumber == undefined || formvalues.phone == undefined) ? ()=>{alert("Please fill all of your detail for payment")} : passData()}
                                        onClick={()=>passData()}
                                        >Proceed</Button>
                
                                    </Form>
                                </Card>
                            </Col>
                            <Col xs lg="3">
                                <Card>
                                    <Card.Header>Price and Date</Card.Header>
                                    <Row className='p-3'>
                                        <Card.Text>Book for: {values.check_in} until {values.check_out}</Card.Text>
                                        <Card.Text>
                                            Voucher Applied: {Array.from(appliedVoucherList()).map((_,v)=>(
                                                appliedVoucherList()[v].spofDescription
                                            ).replace(/,/g, '')).join(', ')}
                                        </Card.Text>
                                        <Card.Text>Total Discount Applied: {currencyFormatter.format(totalDiscount)}</Card.Text>
                                        <Card.Text>Grand Total (incl. tax): {priceList(id)[0]}</Card.Text>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
        </Layout>
    );
}
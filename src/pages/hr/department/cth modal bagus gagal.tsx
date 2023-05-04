// import { useEffect, useState } from "react";
// import React from "react";
// import { Input, Button, Modal, Form } from "antd";
// import { useDispatch } from "react-redux";
// import { GetDeptRequest, GetDeptSuccess, GetDeptFailed, AddDeptRequest, AddDeptSuccess, AddDeptFailed, FindDeptRequest, FindDeptSuccess, FindDeptFailed, EditDeptRequest, EditDeptSuccess, EditDeptFailed } from '../../../redux/action/hr/departmentAction'

// export default function ModalComponent(props: any){
//     const id = props.id;
//     const data = props.data; 
//     const page = props.page;
//     const { handleClose } = props;
//     const details = data && data.find((item: any) => item.deptId == id);
//     const [formValues, setFormValues] = useState(details);
//     const [form] = Form.useForm();
//     const dispatch = useDispatch();
  
//     /* handle modal Edit Data */
//     const handleInputChange = (input: any) => (e: any) => {
//       setFormValues({ ...formValues, [input]: e.target.value });
//     };

//     /* handle form */
//   const onFinish = (values: any) => {
//     values = {...values, page: page}

//     if(props.typeModal == "Add"){
//       dispatch(AddDeptRequest(values));
//     }else if (props.typeModal == "Edit") {
//       dispatch(EditDeptRequest({ ...values, deptId: id }));
//     }

//     handleClose(false);
//   };
//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

//   /* endhandle form */
//   return (
//     <div>
//       <Modal
//         open={props.show}
//         title={props.typeModal + " department"}
//         okText="Submit"
//         onCancel={props.handleCancel}
//         onOk={form.submit}
//       >
//         <Form
//           name="basic"
//           labelCol={{ span: 6 }}
//           wrapperCol={{ span: 16 }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//           initialValues={formValues}
//           form={form}
//         >
//           <Form.Item
//             label="Department"
//             name="deptName"
//             rules={[
//               { required: true, message: "Please input department name!" },
//             ]}
//           >
//             <Input
//               placeholder="Input department name"
//               onChange={handleInputChange("deptName")}
//             />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// //cocokin impor impor dulu sama dimas aldio, baru mulai

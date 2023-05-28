import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast'; 
import { DeleteDeptRequest } from "../../../redux/action/hr/departmentAction";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export default function Delete(props: any) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const toast = useRef<any>(null);

  const deleteDept = () => {
    dispatch(DeleteDeptRequest(props.id));
    props.setRefresh(true);
    setShowModal(false);
    toast.current.show({ severity: 'success', summary: 'Success', life: 3000, detail: 'Department deleted successfully.' });
    };

  return (
    <>
      <Button
        icon="pi pi-trash"
        severity="secondary"
        label="Delete"
        className=""
        style={{ paddingRight: '35px' }}
        onClick={() => setShowModal(true)}
        text
      />
      <Dialog
        visible={showModal}
        onHide={() => setShowModal(false)}
        breakpoints={{ '960px': '75vw' }}
        style={{ width: '30vw' }}
        header="Confirm delete"
        footer={
          <>
            <Button
              icon="pi pi-times"
              label="No"
              className="mr-2"
              raised outlined
              onClick={() => setShowModal(false)}
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              severity="danger"
              onClick={deleteDept}
              autoFocus
            />
          </>
        }
      >
        <div className="p-d-flex p-ai-center">
          <span className="p-mr-2">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
            Are you sure you want to delete Department <strong>{props.name}</strong> ?
          </span>
        </div>
      </Dialog>

      <Toast ref={toast} position="top-right" />
    </>
  );
}

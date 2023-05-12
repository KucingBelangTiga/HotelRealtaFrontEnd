import React from "react";
import { EditFacilityPhotosRequest } from "../../../redux/action/hotel/facilityPhotosAction";
import { useDispatch } from "react-redux";
export default function PhotoPrimary(props: any) {
  const dispatch = useDispatch();
  const onEdit = () => {
    const primary = !props.primary;
    const payload = {
      faphoId: props.id,
      faphoPrimary: primary,
    };
    dispatch(EditFacilityPhotosRequest(payload));
    props.setRefresh(true);
  };
  return (
    <div>
      <input type="checkbox" checked={props.primary} onChange={onEdit}></input>
      <label> Set as Primary</label>
    </div>
  );
}

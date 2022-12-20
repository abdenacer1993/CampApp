import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLCamps } from "../../JS/actions/campActions";
import CampCard from "./CampCard";

const CampList = () => {
  const camps = useSelector((state) => state.campReducer.camps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLCamps());
    
  }, []);
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: "20px",
      }}
    >
      {camps.map((el) => (
        <CampCard el={el} key={el._id} />
      ))}
    </div>
  );
};

export default CampList;

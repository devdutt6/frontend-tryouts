import React from "react";
// import { buyCake } from "../../store/cake/action";
import { connect } from "react-redux";

const Cake = ({ numberOfCake, buyCake }) => {
  return (
    <div>
      <div>Cakes Left: {numberOfCake}</div>
      <button onClick={() => buyCake()}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCake: state.numberOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);

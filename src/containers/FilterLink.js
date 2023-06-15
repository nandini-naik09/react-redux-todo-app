import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../component/Link";

const mapStateToProps= (state,props)=>({
    active:props.filter===state.visibilityFilter
});

const mapDispatchToProps =(dispatch, props)=>({
    onClick :()=>dispatch(setVisibilityFilter(props.filter))
});

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(Link);
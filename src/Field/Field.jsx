import React from "react";
import PropTypes from "prop-types";
import style from "./Field.module.css"

const Field =({field, index, handleClickCeil}) => {

    return (
        <div className={style.Field} onClick={() => {
            handleClickCeil(index)
        }}>
            {field}
        </div>
    );
};

export default Field

Field.propTypes = {
    field: PropTypes.string,
    handleClickCeil: PropTypes.func,
    index: PropTypes.number

}
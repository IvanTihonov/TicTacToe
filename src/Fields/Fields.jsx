import React from "react";
import PropTypes from "prop-types";
import Field from "../Field/Field";
import styles from "./Fields.module.css";

const Fields = ({fields, handleClickCeil}) => {

    return (
        <div className={styles.Fields}>
            {fields.map((field, index) => (
                   < Field key={index} index={index} field={field} handleClickCeil={handleClickCeil}/>
                )
            )}
        </div>
    );
};

export default Fields


Fields.propTypes = {
    fields: PropTypes.array.isRequired, 
    handleClickCeil: PropTypes.func
}
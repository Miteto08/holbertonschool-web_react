import PropTypes from "prop-types";
import React from "react";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <tr>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
}

export default CourseListRow
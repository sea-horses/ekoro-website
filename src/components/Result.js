import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        const result = this.props.result;
        return (
            <div className="result">
                {
                    result && result.map((subResult) =>
                        <div key={subResult.category} className="category">
                            <span>{subResult.category} : {subResult.value}</span>
                        </div>
                    )
                }

            </div>
        );
    }
};

Result.propTypes = {
    result: PropTypes.array,
}

Result.defaultProps = {
    result: []
}

export default Result;
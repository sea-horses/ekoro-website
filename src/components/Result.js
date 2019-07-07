import React from 'react'

class Result extends React.Component {
    render() {
        const result = this.props.result;
        return (
            <div className="result">
                {
                    result && result.map((subResult) =>
                        <div className="category">
                            <span>{subResult.category} : {subResult.value}</span>
                        </div>
                    )
                }

            </div>
        );
    }
};

export default Result;
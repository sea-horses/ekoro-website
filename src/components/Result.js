import React from 'react';
import PropTypes from 'prop-types';
import ScoreChart from './ScoreChart';
import SuggestedActions from './SuggestedActions';

class Result extends React.Component {
    render() {
        const result = this.props.result;
        const maxScore = 10;

        const chartData = result.reduce((data = {}, item) => {
            data[item.category] = item.value
            return data;
        }, {});
        /* const maxScore = 100;
        const chartData = { home: 50, work: 70, food: 30, travel: 0, lifestyle: 50 };*/

        console.log({ chartData });

        return (
            <div className="result">
                {result &&
                    <ScoreChart scoreData={chartData} maxScore={maxScore} />
                }

                <SuggestedActions result={result} />

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
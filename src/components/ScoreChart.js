import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryTheme, VictoryArea, VictoryPolarAxis, VictoryLabel } from 'victory';

class ScoreChart extends React.Component {
    render() {
        const maxima = this.getMaxima(this.props.scoreData);
        const data = this.processData(this.props.scoreData);
        console.log({ data, maxima });
        return (

            <div className="categoryChart" >
                <VictoryChart polar
                    theme={VictoryTheme.material}
                    domain={{ y: [0, 1] }}
                >
                    <VictoryArea style={{ data: { fill: "gold", fillOpacity: 0.2, strokeWidth: 2 } }}
                        data={data} />

                    {
                        Object.keys(maxima).map((key, i) => {
                            return (
                                <VictoryPolarAxis key={i} dependentAxis
                                    style={{
                                        axisLabel: { padding: 30 },
                                        axis: { stroke: "none" },
                                        grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 },
                                        tickLabels: { padding: 200 }
                                    }}
                                    tickLabelComponent={
                                        <VictoryLabel labelPlacement="vertical" />
                                    }
                                    labelPlacement="perpendicular"
                                    axisValue={i + 1} label={key}
                                    tickFormat={(t) => ""}
                                    tickValues={[1]}
                                />
                            );
                        })
                    }
                    <VictoryPolarAxis
                        labelPlacement="perpendicular"
                        tickFormat={() => ""}
                        style={{
                            axis: { stroke: "none" },
                            grid: { stroke: "grey", opacity: 0.5 }
                        }}
                    />

                </VictoryChart>
            </div>
        );
    }

    getMaxima(data) {
        return Object.keys(data).reduce((maxima, key) => {
            maxima[key] = this.props.maxScore;
            return maxima;
        }, {});
    }

    processData(data) {
        return Object.keys(data).map((key) => {
            return { x: key, y: data[key] / this.props.maxScore };
        });
    }

};

ScoreChart.propTypes = {
    scoreData: PropTypes.object,
}

ScoreChart.defaultProps = {
    scoreData: []
}

export default ScoreChart;
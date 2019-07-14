import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

export default function SuggestedActions(props) {
    const result = props.result;
    const [value, setValue] = React.useState(0);

    return (
        <div className="suggestedActions">
            <AppBar position="static">
                <Tabs value={value} onChange={changeTab}>
                    {
                        result && result.map((subResult) =>
                            <Tab key={subResult.category} label={subResult.category} />
                        )
                    }
                </Tabs>
            </AppBar>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    ACTIONS LIST
            </Grid>
                <Grid item xs={6}>
                    ACTIONS DETAIL
            </Grid>
            </Grid>
        </div>


    );

    function changeTab(event, newValue) {
        setValue(newValue);
    }

};

SuggestedActions.propTypes = {
    result: PropTypes.array,
}

SuggestedActions.defaultProps = {
    result: []
}

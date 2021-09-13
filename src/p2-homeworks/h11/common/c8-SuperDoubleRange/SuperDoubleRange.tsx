import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 20
    },
});

function valuetext(value: number) {
    return `${value}`;
}

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: [number, number]
    disabled: boolean
    min: number
    max: number
    // min, max, step, disable, ...
}


export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        console.log(newValue)
        props.onChangeRange && props.onChangeRange(newValue);

    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                <div>
                    range-mui
                </div>
            </Typography>
            <Slider
                min={0}
                max={100}
                disabled={props.disabled}
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}


// import React from 'react'
//
//
// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//
//
//     return (
//         <>
//             DoubleRange
//         </>
//     )
// }
//
// export default SuperDoubleRange

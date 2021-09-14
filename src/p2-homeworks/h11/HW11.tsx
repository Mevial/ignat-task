import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const qwe = (value: number | number[]) => {
        if (typeof value !== 'number') {
            setValue1(value[0])
            setValue2(value[1])
        }

    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange onChangeRange={qwe}
                                  value={[value1, value2]}
                                  disabled={false} //value2<value1 || value1===value2?
                                  min={0}
                                  max={100}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11

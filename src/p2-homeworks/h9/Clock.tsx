import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId) // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date()) // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true) // show
    }
    const onMouseLeave = () => {
        setShow(false) // close
    }

    const stringTime = date?.toLocaleTimeString() || <br/> // br нужен чтобы сайт не дергался
    const stringDate = date?.toLocaleDateString() || <br/> // br нужен чтобы сайт не дергался

    return (
        <div>
            <div className={styles.item}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div className={styles.item}>
                    {stringDate}
                </div>
            ) : (
                <br/> //br не желателен, другой вариант установить высоту дивки
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

const priorityClass = styles.item + ' ' + styles[props.affair.priority]
    return (
        <div className={styles.affair}>
            <div className={styles.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <SuperButton red onClick={deleteCallback} className={styles.item + ' ' + styles.button}>Х</SuperButton>
        </div>
    )
}

export default Affair

import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {loadingAC} from "../h10/bll/loadingReducer";
import {API} from "./api/API";
import Preloader from "../h10/Preloader/Preloader";
import styles from './HW13.module.css'

export const Request = () => {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)

    const [value, setValue] = useState(false)
    const [correctAnswer, setAnswer] = useState<string>('')
    const [errorAnswer, setErrorAnswer] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        dispatch(loadingAC(true))
        API.createPost(value)

            .then(response => {

                setAnswer(response.data.errorText)
                setError(false)
            })

            .catch(err => {
                setErrorAnswer(err.response.data.errorText)
                setError(true)
            })
            .finally(() => {
                dispatch(loadingAC(false))
            })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setValue(true)
        } else {
            setValue(false)
        }
    }


    return (
        <div className={styles.requestBox}>
            {loading && <Preloader/>}
            <div><SuperButton className={styles.requestBtn} onClick={onClickHandler}>Click</SuperButton></div>
            <div>
                <SuperCheckbox onChange={onChangeHandler} checked={value}/>
            </div>
            <div className={styles.errorAnswer}>{error && errorAnswer}</div>
            <div className={styles.correctAnswer}>{!error && correctAnswer}</div>
        </div>
    );
};

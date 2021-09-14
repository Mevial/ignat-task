import React, {useCallback} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'purple'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.theme.title)
    const dispatch = useDispatch()

    const addTheme = useCallback(function (title: string) {
        const action = changeThemeC(title);
        dispatch(action);
    }, [dispatch]);


    // 'some';  useSelector

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme + '']}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={addTheme}/>
            <hr/>
        </div>
    );
}

export default HW12;

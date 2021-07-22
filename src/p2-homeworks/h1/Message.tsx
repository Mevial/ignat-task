import React from 'react'
import styles from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={styles.message}>
            <img src={props.avatar} alt={'#'}/>
            <div className={styles.block}></div>
            <div className={styles.text}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.content}>{props.message}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message

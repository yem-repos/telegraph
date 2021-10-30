import React from 'react';
import styles from './Row.module.scss';

function Row (props: any) {
    return <div className={ styles.Row }>{props.children}</div>;
}

export default Row;
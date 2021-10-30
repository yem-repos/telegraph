import React from 'react';
import styles from './Cell.module.scss';

function Cell (props: any) {
    return <div className={ styles.Cell }>{props.children}</div>;
}

export default Cell;
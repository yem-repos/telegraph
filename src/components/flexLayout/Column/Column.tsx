import React from 'react';
import styles from './Column.module.scss';

function Column (props: any) {
    const { style, size, children } = props;
    return <div style={style} className={ styles.Column } data-size={size}>{children}</div>;
}

export default Column;
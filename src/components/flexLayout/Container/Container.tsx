import React from 'react';
import styles from './Container.module.scss';

function Container (props: any) {
    return <div className={ styles.Container }>{props.children}</div>;
}

export default Container;
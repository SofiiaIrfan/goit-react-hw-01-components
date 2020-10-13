import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from './default-img.png';

import styles from './FriendsList.module.css';

const Friends = props => (
    <li className={styles.itemContainer}>
        <span
            className={props.isOnline ? styles.online : styles.offline}
        ></span>
        <img
            className={styles.avatar}
            src={props.url}
            alt={props.name}
            width="48"
        />
        <p className={styles.name}>{props.name}</p>
    </li>
);

Friends.defaultProps = {
    url: defaultImg,
    name: 'Anonymous',
};

Friends.protoTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
};

export default Friends;
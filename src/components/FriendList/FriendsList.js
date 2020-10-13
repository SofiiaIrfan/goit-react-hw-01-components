import React from 'react';
import PropTypes from 'prop-types';

import Friends from './Friends';

import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => (
    <section className={styles.section}>
        <ul className={styles.list}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <Friends
                    key={id}
                    isOnline={isOnline}
                    url={avatar}
                    name={name}
                />
            ))}
        </ul>
    </section>
);

FriendList.protoTypes = {
    id: PropTypes.number.isRequired,
};
export default FriendList;

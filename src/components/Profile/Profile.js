import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

import defaultImg from './default-img.png';

const Profile = props => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={props.avatar}
                alt="props avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{props.name}</p>
            {props.tag && <p className={styles.tag}>{`@${props.tag}`}</p>}
            <p className={styles.location}>{props.location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.statsItem}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{props.stats.followers}</span>
            </li>
            <li className={styles.statsItem}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{props.stats.views}</span>
            </li>
            <li className={styles.statsItem}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{props.stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultImg,
    name: 'Anonymous',
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;
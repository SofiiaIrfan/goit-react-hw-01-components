import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticList.module.css';

const Statistic = ({ label, percentage }) => (
    <>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </>
);

Statistic.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistic;
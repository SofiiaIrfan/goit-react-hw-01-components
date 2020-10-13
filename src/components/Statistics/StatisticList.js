import React from 'react';
import PropTypes from 'prop-types';

import Statistic from './Statistic';
import Section from './Section';

import styles from './StatisticList.module.css';

function getRandomColor() {
    let r = function () {
        return Math.floor(Math.random() * 256);
    };
    return `rgb(${r()},${r()},${r()})`;
}

const StatisticList = ({ stats }) => (
    <Section title="Upload stats">
        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    className={styles.item}
                    style={{ backgroundColor: getRandomColor() }}
                >
                    <Statistic key={id} label={label} percentage={percentage} />
                </li>
            ))}
        </ul>
    </Section>
);

export default StatisticList;

StatisticList.defaultProps = {
    title: '',
};

StatisticList.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticList.module.css';

const Section = ({ title, children }) => (
    <>
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
        </section>
    </>
);

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;
import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const Transactions = items => (
    <tr className={styles.tableRow}>
        <td className={styles.type}>{items.type}</td>
        <td className={styles.amount}>{items.amount}</td>
        <td className={styles.currency}>{items.currency}</td>
    </tr>
);

Transactions.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default Transactions;
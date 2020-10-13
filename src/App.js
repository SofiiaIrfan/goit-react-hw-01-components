import React from 'react';

import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import StatisticList from './components/Statistics/StatisticList';
import FriendList from './components/FriendList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user-data.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
    return (
        <Container>
            <Profile {...user} />
            <StatisticList stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </Container>
    );
};

export default App;
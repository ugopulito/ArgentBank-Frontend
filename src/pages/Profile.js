import React from 'react';
import Transaction from '../components/Transaction';

const Profile = () => {
    return (
        <main className='profile main bg-dark'>
            <h1>
                Welcome back
                <br/>
                user.name
            </h1>
            <button className='edit-button'>Edit Name</button>
            <Transaction 
                title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'
            />
            <Transaction 
                title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance'
            />
            <Transaction 
                title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance'
            />
        </main>
    );
};

export default Profile;
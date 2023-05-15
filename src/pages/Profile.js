import React from 'react';
import Transaction from '../components/Transaction';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const userStore = useSelector(state => state.User);
    const dispatch = useDispatch();
    const editName = () => {
        dispatch({
            type: 'User/editUsername',
            payload: 'updated username'
        })
    };
    return (
        <main className='profile main bg-dark'>
            <h1>
                Welcome back
                <br/>
                {userStore.firstName}
            </h1>
            <button onClick={editName} className='edit-button'>Edit Name</button>
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
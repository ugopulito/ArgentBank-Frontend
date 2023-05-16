import React, { useState } from 'react';
import Transaction from '../components/Transaction';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux';

const Profile = () => {
    const userStore = useSelector(state => state.User);
    const dispatch = useDispatch();
    const [newuserName, setnewuserName] = useState(userStore.userName)
    const editUsername = (e) => {
        e.preventDefault();
        dispatch(saveUserData({name: 'userName', value: newuserName}))
    };
    const initModale = () => {
        console.log('init Modale');
    }
    const cancel = (e) => {
        e.preventDefault();
        setnewuserName('');
    }
    return (
        <main className='profile main bg-dark'>
            <h1>
                Welcome back
                <br/>
                {userStore.userName}
            </h1>
            <button onClick={initModale} className='edit-button'>Edit Name</button>
            <form>
                <label htmlFor='username'>User name:</label>
                <input type='text' name='username' placeholder={userStore.userName} value={newuserName} onChange={(e) => {setnewuserName(e.target.value)}}></input>
                <label htmlFor='firstname'>User name:</label>
                <input type='text' name='firstname' value={userStore.firstName} disabled></input>
                <label htmlFor='last name'>User name:</label>
                <input type='text' name='last name' value={userStore.lastName} disabled></input>
                <button onClick={editUsername}>Save</button>
                <button onClick={cancel}>Cancel</button>
            </form>
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
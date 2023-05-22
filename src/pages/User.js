import React, { useEffect } from 'react';
import Transaction from '../components/Transaction';
import { useDispatch, useSelector } from 'react-redux';
import Modale from '../components/Modale';
import { userService } from '../_utils/UserService';
import { saveUserData } from '../redux';

const Profile = () => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.User);
    const initModale = () => {
        console.log('init Modale');
    }

useEffect(() => {
    //Requête de récupération d'infos client
    userService.getUserData()
        .then((user) => {
            for(let i in user.data.body){
                dispatch(saveUserData({name: i, value: user.data.body[i]}))
            }
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }, [dispatch])
    return (
        <main className='profile main bg-dark'>
            <h1>
                Welcome back
                <br/>
                {userStore.userName}
            </h1>
            <button onClick={initModale} className='edit-button'>Edit Name</button>
            <Modale/>
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
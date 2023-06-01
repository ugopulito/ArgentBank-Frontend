import React, { useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from '../components/EditForm';
import { userService } from '../_utils/UserService';
import { saveUserData } from '../redux';

const User = () => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.User);
    const toggleEditForm = () => {
        setVisible(!visible)
    }
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        //Requête de récupération d'infos client
        userService.getUserData()
        .then((user) => {
            for(let i in user.data.body){
                dispatch(saveUserData({name: i, value: user.data.body[i]}))
            }
        })
        .catch((error) => {
            console.log(error);
        })
        /* return () => {} */
    }, [dispatch])
    return (
        <main className='profile main bg-dark'>
            <h1>
                Welcome back
                <br/>
                {userStore.userName}
            </h1>
            <button onClick={toggleEditForm} className='edit-button'>Edit Name</button>
            <EditForm visible={visible} onhide={toggleEditForm}/>
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

export default User;
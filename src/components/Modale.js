
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux';


const Modale = () => {
    const userStore = useSelector(state => state.User);
    const dispatch = useDispatch();
    const [newuserName, setnewuserName] = useState(userStore.userName)
    const editUsername = (e) => {
        e.preventDefault();
        dispatch(saveUserData({name: 'userName', value: newuserName}))
    };
    const cancel = (e) => {
        e.preventDefault();
        setnewuserName('');
    }
    return (
            <form className='modale'>
                <p>Edit user info</p>
                <div className='modale-items'>
                    <label className='modale-label' htmlFor='username'>User name:</label>
                    <input className='modale-input' type='text' name='username' placeholder={userStore.userName} value={newuserName} onChange={(e) => {setnewuserName(e.target.value)}}></input>
                </div>
                <div className='modale-items'>
                    <label className='modale-label' htmlFor='firstname'>First name:</label>
                    <input className='modale-input' type='text' name='firstname' value={userStore.firstName} disabled></input>
                </div>
                <div className='modale-items'>
                    <label className='modale-label' htmlFor='last name'>Last name:</label>
                    <input className='modale-input' type='text' name='last name' value={userStore.lastName} disabled></input>
                </div>
                <div className='modale-items'>
                    <button className='edit-button' onClick={editUsername}>Save</button>
                    <button className='edit-button' onClick={cancel}>Cancel</button>
                </div>
            </form>
    );
};

export default Modale;
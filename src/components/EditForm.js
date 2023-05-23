
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux';


const EditForm = ({visible, onhide}) => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.User);
    const [newuserName, setnewuserName] = useState(userStore.userName);
    const editUsername = (e) => {
        e.preventDefault();
        if(newuserName !== ''){
            dispatch(saveUserData({name: 'userName', value: newuserName}));
            setnewuserName('');
            onhide()
        }
    };
    const cancel = (e) => {
        e.preventDefault();
        setnewuserName('');
        onhide()
    }
    if(!visible){
        return null
    }
    return (
            <form className='edit_form'>
                <p>Edit user info</p>
                <div className='edit_form-items'>
                    <label className='edit_form-label' htmlFor='username'>User name:</label>
                    <input className='edit_form-input' type='text' name='username' placeholder={userStore.userName} value={newuserName} onChange={(e) => {setnewuserName(e.target.value)}} required />
                </div>
                <div className='edit_form-items'>
                    <label className='edit_form-label' htmlFor='firstname'>First name:</label>
                    <input className='edit_form-input' type='text' name='firstname' value={userStore.firstName} disabled></input>
                </div>
                <div className='edit_form-items'>
                    <label className='edit_form-label' htmlFor='last name'>Last name:</label>
                    <input className='edit_form-input' type='text' name='last name' value={userStore.lastName} disabled></input>
                </div>
                <div className='edit_form-items'>
                    <button type='submit' className='edit-button' onClick={editUsername}>Save</button>
                    <button className='edit-button' onClick={cancel}>Cancel</button>
                </div>
            </form>
    );
};

export default EditForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux';
import { userService } from '../_utils/UserService';


const EditForm = ({visible, onhide}) => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.User);
    const [newuserName, setnewuserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const editUsername = (e) => {
        e.preventDefault();
        if(newuserName !== ''){
            userService.updateUserName(newuserName)
            .then(() => {
                dispatch(saveUserData({name: 'userName', value: newuserName}))
                setnewuserName('');
                onhide()
                }
            )
            .catch((error) => {
                (error.response.data.status < 500 ? setErrorMessage('Wrong field. Please try again') : setErrorMessage('Network error. Please try again later'))
            })
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
            <>
                <form onSubmit={editUsername} className='edit_form' autoComplete='off'>
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
                        <button type='submit' className='edit-button'>Save</button>
                        <button className='edit-button' onClick={cancel}>Cancel</button>
                    </div>
                </form>
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </>
    );
};

export default EditForm;
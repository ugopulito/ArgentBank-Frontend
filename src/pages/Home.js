import React from 'react';
import './_Pages.css';
import Feature from '../components/Feature';

const Home = () => {
    return (
        <main className='home main'>
            <div className='hero'>
                <div className='hero-content'>
                    <p className='subtitle'>No fees.</p>
                    <p className='subtitle'>No minimum desposit.</p>
                    <p className='subtitle'>High interest rates.</p>
                    <p className='text'>Open a savings account with Argent Bank today!</p>
                </div>
            </div>
            <section className='features'>
                <Feature src='./img/icon-chat.png' alt='chat icon' title='You are our #1 priority' text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
                <Feature src='./img/icon-money.png' alt='money icon' title='More savings means higher rates' text='The more you save with us, the higher your interest rate will be!' />
                <Feature src='./img/icon-security.png' alt='security icon' title='Security you can trust' text='We use top of the line encryption to make sure your data and money is always safe.' />
            </section>
        </main>
    );
};

export default Home;
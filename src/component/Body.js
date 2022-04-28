import '../css/Body.css';
import React from 'react';
import Article from './Article';
import NewsDynamicItems from './NewsDynamic';

const Body = () => {
    return (
        <main>
            <section className='news_session'>
                <div id='news'>
                    <div id='news_feed'>
                        <NewsDynamicItems />
                    </div>
                    <div id='posts'></div>
                    <Article />
                </div>
                <div id='recommended_users'></div>
            </section>
        </main>
    )
}
export default Body;
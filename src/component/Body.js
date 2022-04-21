import '../css/Body.css';
import React from 'react';
import NewsDynamicItems from './NewsDynamic';
const Body = () => {
    return (
        <main>
            <section>
                <div id='news'>
                    <div id='news_feed'>
                        <NewsDynamicItems />
                    </div>
                    <div id='posts'></div>
                </div>
                <div id='recommended_users'></div>
            </section>
        </main>
    )
}
export default Body;
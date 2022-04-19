import React from 'react';
import './ErrorPage.css';

const ErroPage = () => {
    return (
        <div>
            <div className='container text-center my-5'>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 emo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h2 className='fs-1 fw-bolder'>404</h2>
                <h4 className='fs-2 fw-bold'>Page not found</h4>
                <p className='fs-5 fw-normal'>The Page you are looking for doesn't exist or an other error occurred.</p>

            </div>

        </div>
    );
};

export default ErroPage;
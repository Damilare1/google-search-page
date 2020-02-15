import React from 'react';

const Header = () => (
    <div className="absolute top-0 flex justify-end items-center w-full text-xs py-4 px-8">
        <div className="mx-1"><a href="https://mail.google.com/mail/?tab=wm&authuser=0&ogbl">Gmail</a></div>
        <div className="mx-1"><a href="https://www.google.com.ng/imghp?hl=en&tab=wi&authuser=0&ogbl">Images</a></div>
        <div className="googleApps mx-1"></div>
        <div className="mx-1 p-2 rounded-full bg-grey-600 text-white">DA</div>
    </div>
)

export default Header;
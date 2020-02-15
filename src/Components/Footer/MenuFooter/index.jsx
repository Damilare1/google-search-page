import React from 'react';

const MenuFooter = () => (
    <div style={{ backgroundColor:"#f2f2f2" }} className="w-full py-2 px-8 flex justify-between border-t border-grey-400 text-sm text-grey-700">
        <div className="flex">
            <p className="mr-4">Advertising</p>
            <p className="mr-4">Business</p>
            <p className="mr-4">About</p>
            <p className="mr-4">How Search Works</p>
        </div>
        <div className="flex">
            <p className="mr-4">Privacy</p>
            <p className="mr-4">Terms</p>
            <p className="mr-4">Settings</p>
        </div>
    </div>
)

export default MenuFooter;
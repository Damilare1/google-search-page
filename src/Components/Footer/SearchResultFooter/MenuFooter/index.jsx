import React from 'react';

const MenuFooter = () => (
    <div style={{ backgroundColor:"#f2f2f2" }} className="w-full py-2 px-8 flex justify-between border-t border-grey-400 text-sm text-grey-700">
        <div className="flex pl-32 ">
            <p className="mr-4 text-grey-700 hover:text-grey-800">Help</p>
            <p className="mr-4 text-grey-700 hover:text-grey-800">Send feedback</p>
            <p className="mr-4 text-grey-700 hover:text-grey-800">Privacy</p>
            <p className="mr-4 text-grey-700 hover:text-grey-800">Terms</p>
        </div>
    </div>
)

export default MenuFooter;
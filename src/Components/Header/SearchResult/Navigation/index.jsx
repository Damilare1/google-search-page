import React from 'react';

const Navigation = () => (
    <div style={{ top: "4rem" }} className="flex w-full px-8 pt-4 border-b">
        <div className="w-3/5 flex pl-32 justify-between text-sm">
                <div className="flex justify-between w-3/5">
                    <div className="pb-2 border-b-2"><p>All</p></div>
                    <div><p>News</p></div>
                    <div><p>Images</p></div>
                    <div><p>Videos</p></div>
                    <div><p>Maps</p></div>
                    <div><p>More</p></div>
                </div>
                <div className="flex pr-4 w-1/5 justify-between">
                    <div><p>Settings</p></div>
                    <div><p>Tools</p></div>
                </div>
        </div>
    </div>
)

export default Navigation;
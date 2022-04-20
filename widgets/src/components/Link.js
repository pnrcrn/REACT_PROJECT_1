import React from 'react';

const Link=({className,href,children})=>{

    const onClick=(event)=>{

        if(event.metaKey||event.ctrlKey){
            return;
        };
        event.preventDefault();
        window.history.pushState({},'', href);//i guess change the link.

        const navigaEvent=new PopStateEvent('popstate');//Navigasyoları anlama(206)
        window.dispatchEvent(navigaEvent);
    };
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};
export default Link;
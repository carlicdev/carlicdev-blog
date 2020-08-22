import React from 'react';
import twitterLogo from '../../images/icons/twitterIcon.png';
import pinterestIcon from '../../images/icons/pinterestIcon.png';
import githubIcon from '../../images/icons/githubIcon.png';
import linkedinIcon from '../../images/icons/linkedinIcon.png';

const Footer = () => {
    return (
        <div className='bg-blue-800 text-white '>
            <div className='flex justify-center py-5'>
                <img src={twitterLogo} alt='twitter icon' className='mx-3 h-12'/>
                <img src={pinterestIcon} alt='twitter icon' className='mx-3 h-12'/>
                <img src={githubIcon} alt='twitter icon' className='mx-3 h-12'/>
                <img src={linkedinIcon} alt='twitter icon' className='mx-3 h-12'/>
            </div>
        </div>
    )
}

export default Footer

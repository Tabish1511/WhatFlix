import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Appbar(){
    return (
        <div className='border-solid border-2 border-white flex flex-wrap justify-between p-2'>
            <button>WhatFlix</button>
            <div className='flex flex-wrap justify-between w-24'>
                <GitHubIcon fontSize='large'/>
                <LinkedInIcon fontSize='large' />
            </div>
        </div>
    )
}
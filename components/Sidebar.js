// external import
import { useEffect,useState } from 'react';
// import the icons & library
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// internal imports
import Profile from "./Profile";
import Button from "./Button";
import SidebarMenu from './SidebarMenu';
export default function Sidebar() {
    return (
        <div className='w-64 h-screen bg-windsmook-800 fixed transition-transform'>
            <div className="flex items-center flex-col pt-5">
                <Profile/>
                <Button className="my-5" type="button" buttonStyle="p-3 bg-yellow-400 py-10" buttonSize="h-4 w-9">
                    <FontAwesomeIcon icon={ faHome } style={ { width:'20px'}}/>
                    <span className='text-base'>Make Order</span>
                </Button>
                <SidebarMenu/>
            </div>
        </div>
    )
}

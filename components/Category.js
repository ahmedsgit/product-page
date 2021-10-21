import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Category({ icon, subCategory ,iconColor}) {
    return (
        <div id="category" className="flex flex-row items-center hover:text-white hover:bg-windsmook-500 hover:animate-bounce hover: transition-transform space-x-2 rounded-md p-2 cursor-pointer">
            <FontAwesomeIcon className="flex flex-row " icon={ icon } style={ { width: '18px', color: iconColor} } />
            <span>{ subCategory }</span>
        </div>
    );
}
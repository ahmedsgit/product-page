import { faArchive, faThList ,faPlusCircle, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import Category from './Category';
export default function SidebarMenu() {
    return (
        <div className="relative justify-start pr-4 font-semibold text-white px-4 space-y-2">
            {/* sales part */}
            <h1 className="pb-4 text-gray-500 uppercase">Sales</h1>
            <Category icon={ faArchive } subCategory="Summary" iconColor='#ff8000'/>
            <Category icon={ faThList } subCategory="Order List" iconColor='#ff8000' />
            {/* food part */}
            <h1 className="pb-4 text-gray-500 uppercase pt-3">Food</h1>
            <Category icon={ faPlusCircle } subCategory="Add New" iconColor='#56ad2a'/>
            <Category icon={ faThList } subCategory="Food List" iconColor='#ff8000'/>
            {/* Category part */}
            <h1 className="pb-4 text-gray-500 uppercase pt-3">Category</h1>
            <Category icon={ faPlusCircle } subCategory="Add New" iconColor='#56ad2a'/>
            <Category icon={ faThList } subCategory="Category List" iconColor='#ff8000'/>
            {/* Account part */}
            <h1 className="pb-4 text-gray-500 uppercase pt-3">Account</h1>
            <Category icon={ faPlusCircle } subCategory="Profile" iconColor='#ff8000'/>
            <Category icon={ faCog } subCategory="Settings" iconColor='#ff8000'/>
            <Category icon={ faSignOutAlt } subCategory="Logout" iconColor='#ff8000'/>
        </div>    
        
    )
}

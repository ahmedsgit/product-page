import Image from 'next/image';
import logoProfile from '../assets/image/logo.jpg';
export default function Profile() {
    return (
        <div className='font-semibold flex justify-between '>
            <Image className='rounded-full'
                src={logoProfile}
                alt='User Profile'
                width={ 50 }
                height={ 50 }
            />
            <div className='block px-3 sm:block'>
                <h3 className='text-white group-hover:hidden'>Ahmed Sazzad</h3>
                <p className='text-gray-500 group-hover:hidden'>Admin</p>
            </div>
            
        </div>
    );
}
import { RiContactsBook2Fill } from 'react-icons/ri';
const NoContact = () => {
    return(
        <div className="grid min-h-[480px] place-items-center align-middle">
            <div className="flex gap-0.5">
                <RiContactsBook2Fill className='text-white text-5xl' />
                <h1 className='text-white text-3xl align-text-bottom mt-3'>No Contact Found</h1>
            </div>
        </div>
    )
}
export default NoContact;
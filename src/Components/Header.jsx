
import { HiMenu, HiOutlineBell, HiOutlineChat, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useContext } from 'react';
import { SidebarContext } from '../Pages/Layout.jsx';
function Header() {
    const { setSidebar } = useContext(SidebarContext);
    return (
        <div className='bg-white h-16  px-4 flex items-center justify-between border-b border-gray-200' >
            <div className='flex items-center gap-3' >
                <HiMenu
                    onClick={(e) => setSidebar(prev => !prev)}
                />
                <div className='relative '>
                    {/**/}
                    <HiOutlineSearch size={20} className='text-gray-400 left-1 absolute -translate-y-1/2 top-1/2 ' />
                    <input type="text" placeholder='Search...' className='text-sm focus:outline-none h-10  border border-gray-300 rounded-sm px-8
                    w-6 sm:w-25 md:w-48 lg:w-60
                ' />
                </div>
            </div>
            <div className='flex gap-4 items-center relative'>
                <div  >
                    <Popover className="flex justify-center items-center" >
                        <PopoverButton >
                            <HiOutlineChat fontSize={24} />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom end"
                            className="divide-y
                        divide-black/5 rounded-xl relative z-10 shadow-md bg-white   border-t  text-sm/6 transition duration-200 ease-in-out "
                        >
                            <div className="p-3">
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-black">Messages</p>
                                    <p className="text-black/50">There are no messages</p>
                                </a>

                            </div>

                        </PopoverPanel>
                    </Popover>
                </div>
                <div>
                    <Popover className="flex justify-center items-center">
                        <PopoverButton  >
                            <HiOutlineBell fontSize={24} />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom end"
                            className="divide-y divide-black/5 rounded-xl   border-t 
                        shadow-md z-10 bg-white text-sm/6 transition duration-200 ease-in-out"
                        >
                            <div className="p-3">
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                                    <p className="font-semibold text-black">Notifications</p>
                                    <p className="text-black/50">There are no notifications</p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="profile p-5 rounded-full" >

                            {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
                                >
                                    Account settings
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
                                >
                                    Support
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
                                >
                                    License
                                </a>
                            </MenuItem>
                            <form action="#" method="POST">
                                <MenuItem>
                                    <button
                                        type="submit"
                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
                                    >
                                        Sign out
                                    </button>
                                </MenuItem>
                            </form>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
}

export default Header
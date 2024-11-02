import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOMLINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/Navigation'
import { Link, Outlet, useLocation } from 'react-router-dom'
function Sidebar() {
    const { pathname } = useLocation();
  return (
 
      <div className=' sidebar  flex flex-col p-1  min-w-52' >
              <div className='flex items-center gap-2 px-2 py-4 ' >
                  <FcBullish size={35} />
                  <span>OpenShop</span>
              </div>
              <div className="top flex-1">
                  {DASHBOARD_SIDEBAR_LINKS.map(element => {
                      return <div  >
                          <Link to={element.path} className={`p-1 mt-1 mb-1 flex hover:bg-neutral-700  items-center gap-2 ${(pathname == element.path) ? `text-white bg-neutral-700` : ``}`} >
                              <span>{element.icon}</span>
                              <span>{element.label}</span>
                          </Link>
                      </div>
                  }
                  )}
              </div>
              <div className="bottom border-t border-neutral-500 pt-1">
                  {DASHBOARD_SIDEBAR_BOTTOMLINKS.map(element => {
                      return <div  >
                          <Link to={element.path} className='p-1 flex mt-1 mb-1 hover:bg-neutral-700 sidebar_options items-center gap-2' >
                              <span>{element.icon}</span>
                              <span>{element.label}</span>
                          </Link>
                      </div>
                  })}

              </div>
          </div>
    
  )
}

export default Sidebar
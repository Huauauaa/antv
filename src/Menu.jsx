import React from 'react';
import { routers } from './route';
import { Link, useLocation } from 'react-router-dom';

export default function Menu() {
  let location = useLocation();

  return (
    <nav>
      <ul>
        {routers.map((router) => (
          <li
            key={router.path}
            className={
              location.pathname === router.path ? 'active' : 'inactive'
            }
          >
            <Link to={router.path}>{router.name}</Link>

            {location.pathname.startsWith(router.path) && router.children && (
              <ul>
                {router.children.map((r) => (
                  <li
                    key={r.path}
                    className={
                      location.pathname === r.path ? 'active' : 'inactive'
                    }
                  >
                    <Link to={r.path}>{r.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

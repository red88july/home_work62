import React from 'react';
import reactLogo from '../images/ic-react.png';

const Toolbar:React.FC= () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 ">
      <div className="d-flex align-items-center gap-2">
        <div className="p-2">
          <img className="w-50 h-50" src={reactLogo} alt="React Logo" />
        </div>
        <div className="d-flex align-items-center flex-column">
          <span>Home work 62.</span>
          <strong>Home page about...</strong>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
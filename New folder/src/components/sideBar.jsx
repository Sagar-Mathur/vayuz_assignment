import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleDrawer = (openDrawer: boolean) => () => {
    setOpen(openDrawer);
  };

  const SidebarContent = (
    <div
      style={{
        width: isMobile ? 200 : '100%',
        height: '100%',
        background: '#212121',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img src="/vayuz.png" alt="Logo" className="logo mt-4" />

      <button
        style={{
          border: '2px solid',
          color: 'white',
          background: 'transparent',
          borderRadius: '10px',
          padding: '5px 10px',
          marginTop: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        CONTACT US
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
          padding: '10px 20px 0px 30px',
          width: '100%',
        }}
      >
        <div>App Development</div>
        <div>Challenges</div>
        <div>Hire Developer</div>
        <div>Community</div>
      </div>

      <div
        className="image-section mt-auto p-3 text-center"
        style={{ marginTop: 'auto', padding: '1rem', textAlign: 'center' }}
      >
        <img
          src="/sidebar.png"
          alt="Workspace"
          className="img-fluid rounded"
          style={{ maxWidth: '100%' }}
        />
        <p className="mt-3 small">
          Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Mobile Menu Icon */}
      {isMobile && (
        <div
          style={{
            background: '#212121',
            padding: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Menu
            onClick={toggleDrawer(true)}
            style={{ color: 'white', fontSize: '30px', cursor: 'pointer' }}
          />
        </div>
      )}

      {/* Sidebar for Desktop */}
      {!isMobile && (
        <div
          className="sidebar"
          style={{
            width: '200px',
            height: '100vh',
            background: '#212121',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {SidebarContent}
        </div>
      )}

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {SidebarContent}
      </Drawer>
    </div>
  );
};

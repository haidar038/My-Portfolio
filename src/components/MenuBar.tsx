import { useState, useEffect, useRef } from "react";
import { Apple, Wifi, Battery, Volume2, Search } from "lucide-react";

export const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0 });
  const menuBarRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const menuItems = {
    apple: [
      { label: 'About This Mac', divider: false },
      { label: 'System Preferences...', divider: true },
      { label: 'App Store...', divider: false },
      { label: 'Recent Items', divider: true },
      { label: 'Force Quit...', divider: true },
      { label: 'Sleep', divider: false },
      { label: 'Restart...', divider: false },
      { label: 'Shut Down...', divider: false },
      { label: 'Log Out...', divider: false },
    ],
    finder: [
      { label: 'About Finder', divider: true },
      { label: 'Preferences...', divider: true },
      { label: 'Empty Trash...', divider: true },
      { label: 'Services', divider: true },
      { label: 'Hide Finder', divider: false },
      { label: 'Hide Others', divider: false },
      { label: 'Show All', divider: false },
    ],
    file: [
      { label: 'New Finder Window', divider: false },
      { label: 'New Folder', divider: false },
      { label: 'New Smart Folder', divider: false },
      { label: 'New Tab', divider: true },
      { label: 'Open', divider: false },
      { label: 'Open With', divider: false },
      { label: 'Close Window', divider: true },
      { label: 'Get Info', divider: false },
      { label: 'Rename', divider: true },
      { label: 'Compress', divider: true },
      { label: 'Duplicate', divider: false },
      { label: 'Make Alias', divider: false },
      { label: 'Quick Look', divider: false },
      { label: 'Show Original', divider: false },
      { label: 'Add to Sidebar', divider: true },
      { label: 'Move to Trash', divider: false },
      { label: 'Eject', divider: true },
      { label: 'Find', divider: false },
    ],
    edit: [
      { label: 'Undo', divider: false },
      { label: 'Redo', divider: true },
      { label: 'Cut', divider: false },
      { label: 'Copy', divider: false },
      { label: 'Paste', divider: false },
      { label: 'Select All', divider: true },
      { label: 'Show Clipboard', divider: false },
    ],
    view: [
      { label: 'as Icons', divider: false },
      { label: 'as List', divider: false },
      { label: 'as Columns', divider: false },
      { label: 'as Cover Flow', divider: true },
      { label: 'Clean Up', divider: false },
      { label: 'Arrange By', divider: true },
      { label: 'Show Path Bar', divider: false },
      { label: 'Show Status Bar', divider: false },
      { label: 'Show Sidebar', divider: false },
      { label: 'Show Toolbar', divider: false },
      { label: 'Customize Toolbar...', divider: true },
      { label: 'Show View Options', divider: false },
    ],
    window: [
      { label: 'Minimize', divider: false },
      { label: 'Zoom', divider: true },
      { label: 'Cycle Through Windows', divider: true },
      { label: 'Bring All to Front', divider: false },
    ],
    help: [
      { label: 'Mac Help', divider: true },
      { label: 'Search', divider: false },
    ],
  };

  const menus = [
    { id: 'finder', label: 'Finder' },
    { id: 'file', label: 'File' },
    { id: 'edit', label: 'Edit' },
    { id: 'view', label: 'View' },
    { id: 'window', label: 'Window' },
    { id: 'help', label: 'Help' }
  ];

  const handleMenuClick = (menuId: string) => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
    } else {
      // Calculate position based on button position
      const button = buttonRefs.current[menuId];
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({ left: rect.left });
      }
      setActiveMenu(menuId);
    }
  };

  const renderDropdown = (menuId: string) => {
    const items = menuItems[menuId as keyof typeof menuItems];
    if (!items) return null;

    return (
      <div
        className="fixed top-6 animate-in fade-in duration-150 z-[101]"
        style={{
          left: `${dropdownPosition.left}px`,
          minWidth: '200px',
        }}
      >
        <div
          className="rounded-lg shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(245, 245, 247, 0.98) 0%, rgba(235, 235, 237, 0.98) 100%)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          {items.map((item, index) => (
            <div key={index}>
              <button
                className="w-full px-4 py-1.5 text-left text-xs text-gray-800 hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-between"
                style={{
                  textShadow: 'none',
                }}
              >
                <span>{item.label}</span>
              </button>
              {item.divider && (
                <div
                  className="my-1 mx-2"
                  style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.15), transparent)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={menuBarRef}
      className="fixed top-0 left-0 right-0 h-6 z-[100] hidden md:flex items-center justify-between px-2 select-none"
      style={{
        background: 'linear-gradient(180deg, rgba(230, 230, 230, 0.95) 0%, rgba(210, 210, 210, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      }}
    >
      {/* Left side - Apple logo and menus */}
      <div className="flex items-center gap-0">
        <button
          ref={(el) => (buttonRefs.current['apple'] = el)}
          className={`h-6 px-2 flex items-center justify-center transition-colors ${
            activeMenu === 'apple' ? 'bg-blue-500/40' : 'hover:bg-blue-500/30'
          }`}
          onClick={() => handleMenuClick('apple')}
        >
          <Apple className="w-4 h-4 text-gray-800" fill="currentColor" />
        </button>

        {menus.map((menu) => (
          <button
            key={menu.id}
            ref={(el) => (buttonRefs.current[menu.id] = el)}
            className={`h-6 px-2 text-xs font-semibold text-gray-800 transition-colors ${
              activeMenu === menu.id ? 'bg-blue-500/40' : 'hover:bg-blue-500/30'
            }`}
            onClick={() => handleMenuClick(menu.id)}
            style={{
              textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
          >
            {menu.label}
          </button>
        ))}
      </div>

      {/* Render active dropdown */}
      {activeMenu && renderDropdown(activeMenu)}

      {/* Right side - System icons and time */}
      <div className="flex items-center gap-2">
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Search className="w-3.5 h-3.5 text-gray-800" />
        </button>
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Battery className="w-3.5 h-3.5 text-gray-800" />
        </button>
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Wifi className="w-3.5 h-3.5 text-gray-800" />
        </button>
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Volume2 className="w-3.5 h-3.5 text-gray-800" />
        </button>
        <div
          className="text-xs font-medium text-gray-800 px-2"
          style={{
            textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)'
          }}
        >
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useRef } from "react";
import { Wifi, Battery, Volume2, Search, Languages, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import HDRBlackLogo from "@/assets/logos/HDR-BLACK.png";
import HDRWhiteLogo from "@/assets/logos/HDR-WHITE.png";

export const MenuBar = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0 });
  const menuBarRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setActiveMenu(null);
  };

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
      { label: t('menuBar.apple.aboutThisMac'), divider: false },
      { label: t('menuBar.apple.systemPreferences'), divider: true },
      { label: t('menuBar.apple.appStore'), divider: false },
      { label: t('menuBar.apple.recentItems'), divider: true },
      { label: t('menuBar.apple.forceQuit'), divider: true },
      { label: t('menuBar.apple.sleep'), divider: false },
      { label: t('menuBar.apple.restart'), divider: false },
      { label: t('menuBar.apple.shutDown'), divider: false },
      { label: t('menuBar.apple.logOut'), divider: false },
    ],
    finder: [
      { label: t('menuBar.finderMenu.aboutFinder'), divider: true },
      { label: t('menuBar.finderMenu.preferences'), divider: true },
      { label: t('menuBar.finderMenu.emptyTrash'), divider: true },
      { label: t('menuBar.finderMenu.services'), divider: true },
      { label: t('menuBar.finderMenu.hideFinder'), divider: false },
      { label: t('menuBar.finderMenu.hideOthers'), divider: false },
      { label: t('menuBar.finderMenu.showAll'), divider: false },
    ],
    file: [
      { label: t('menuBar.fileMenu.newFinderWindow'), divider: false },
      { label: t('menuBar.fileMenu.newFolder'), divider: false },
      { label: t('menuBar.fileMenu.newSmartFolder'), divider: false },
      { label: t('menuBar.fileMenu.newTab'), divider: true },
      { label: t('menuBar.fileMenu.open'), divider: false },
      { label: t('menuBar.fileMenu.openWith'), divider: false },
      { label: t('menuBar.fileMenu.closeWindow'), divider: true },
      { label: t('menuBar.fileMenu.getInfo'), divider: false },
      { label: t('menuBar.fileMenu.rename'), divider: true },
      { label: t('menuBar.fileMenu.compress'), divider: true },
      { label: t('menuBar.fileMenu.duplicate'), divider: false },
      { label: t('menuBar.fileMenu.makeAlias'), divider: false },
      { label: t('menuBar.fileMenu.quickLook'), divider: false },
      { label: t('menuBar.fileMenu.showOriginal'), divider: false },
      { label: t('menuBar.fileMenu.addToSidebar'), divider: true },
      { label: t('menuBar.fileMenu.moveToTrash'), divider: false },
      { label: t('menuBar.fileMenu.eject'), divider: true },
      { label: t('menuBar.fileMenu.find'), divider: false },
    ],
    edit: [
      { label: t('menuBar.editMenu.undo'), divider: false },
      { label: t('menuBar.editMenu.redo'), divider: true },
      { label: t('menuBar.editMenu.cut'), divider: false },
      { label: t('menuBar.editMenu.copy'), divider: false },
      { label: t('menuBar.editMenu.paste'), divider: false },
      { label: t('menuBar.editMenu.selectAll'), divider: true },
      { label: t('menuBar.editMenu.showClipboard'), divider: false },
    ],
    view: [
      { label: t('menuBar.viewMenu.asIcons'), divider: false },
      { label: t('menuBar.viewMenu.asList'), divider: false },
      { label: t('menuBar.viewMenu.asColumns'), divider: false },
      { label: t('menuBar.viewMenu.asCoverFlow'), divider: true },
      { label: t('menuBar.viewMenu.cleanUp'), divider: false },
      { label: t('menuBar.viewMenu.arrangeBy'), divider: true },
      { label: t('menuBar.viewMenu.showPathBar'), divider: false },
      { label: t('menuBar.viewMenu.showStatusBar'), divider: false },
      { label: t('menuBar.viewMenu.showSidebar'), divider: false },
      { label: t('menuBar.viewMenu.showToolbar'), divider: false },
      { label: t('menuBar.viewMenu.customizeToolbar'), divider: true },
      { label: t('menuBar.viewMenu.showViewOptions'), divider: false },
    ],
    window: [
      { label: t('menuBar.windowMenu.minimize'), divider: false },
      { label: t('menuBar.windowMenu.zoom'), divider: true },
      { label: t('menuBar.windowMenu.cycleThroughWindows'), divider: true },
      { label: t('menuBar.windowMenu.bringAllToFront'), divider: false },
    ],
    help: [
      { label: t('menuBar.helpMenu.macHelp'), divider: true },
      { label: t('menuBar.helpMenu.search'), divider: false },
    ],
  };

  const menus = [
    { id: 'finder', label: t('menuBar.menus.finder') },
    { id: 'file', label: t('menuBar.menus.file') },
    { id: 'edit', label: t('menuBar.menus.edit') },
    { id: 'view', label: t('menuBar.menus.view') },
    { id: 'window', label: t('menuBar.menus.window') },
    { id: 'help', label: t('menuBar.menus.help') }
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
      className="fixed top-0 left-0 right-0 h-6 z-[100] hidden md:flex items-center justify-between px-2 select-none transition-all duration-300"
      style={{
        background: isDarkMode
          ? 'linear-gradient(180deg, rgba(51, 65, 85, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(230, 230, 230, 0.95) 0%, rgba(210, 210, 210, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isDarkMode ? '1px solid rgba(148, 163, 184, 0.3)' : '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: isDarkMode
          ? '0 1px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(148, 163, 184, 0.2)'
          : '0 1px 0 rgba(255, 255, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
      }}
    >
      {/* Left side - HDR logo and menus */}
      <div className="flex items-center gap-0">
        <button
          ref={(el) => (buttonRefs.current['apple'] = el)}
          className={`h-6 px-2 flex items-center justify-center transition-colors ${
            activeMenu === 'apple' ? 'bg-blue-500/40' : 'hover:bg-blue-500/30'
          }`}
          onClick={() => handleMenuClick('apple')}
        >
          <img
            src={isDarkMode ? HDRWhiteLogo : HDRBlackLogo}
            alt="HDR Logo"
            className="w-4 h-4 object-contain"
          />
        </button>

        {menus.map((menu) => (
          <button
            key={menu.id}
            ref={(el) => (buttonRefs.current[menu.id] = el)}
            className={`h-6 px-2 text-xs font-semibold transition-colors ${
              activeMenu === menu.id ? 'bg-blue-500/40' : 'hover:bg-blue-500/30'
            }`}
            onClick={() => handleMenuClick(menu.id)}
            style={{
              color: isDarkMode ? '#f1f5f9' : '#1f2937',
              textShadow: isDarkMode ? '0 1px 0 rgba(0, 0, 0, 0.5)' : '0 1px 0 rgba(255, 255, 255, 0.8)'
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
          <Search className="w-3.5 h-3.5" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }} />
        </button>

        {/* Language Switcher */}
        <div className="relative">
          <button
            ref={(el) => (buttonRefs.current['language'] = el)}
            className={`h-6 px-2 flex items-center justify-center gap-1 transition-colors rounded ${
              activeMenu === 'language' ? 'bg-blue-500/40' : 'hover:bg-blue-500/30'
            }`}
            onClick={() => handleMenuClick('language')}
          >
            <Languages className="w-3.5 h-3.5" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }} />
            <span className="text-[10px] font-medium" style={{
              color: isDarkMode ? '#f1f5f9' : '#1f2937',
              textShadow: isDarkMode ? '0 1px 0 rgba(0, 0, 0, 0.5)' : '0 1px 0 rgba(255, 255, 255, 0.8)'
            }}>
              {i18n.language.toUpperCase()}
            </span>
          </button>

          {activeMenu === 'language' && (
            <div
              className="fixed top-6 animate-in fade-in duration-150 z-[101]"
              style={{
                left: `${dropdownPosition.left}px`,
                minWidth: '120px',
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
                <button
                  className={`w-full px-4 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                    i18n.language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-blue-500 hover:text-white'
                  }`}
                  onClick={() => changeLanguage('en')}
                  style={{ textShadow: 'none' }}
                >
                  <span>English</span>
                  {i18n.language === 'en' && <span>✓</span>}
                </button>
                <button
                  className={`w-full px-4 py-1.5 text-left text-xs transition-colors flex items-center justify-between ${
                    i18n.language === 'id' ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-blue-500 hover:text-white'
                  }`}
                  onClick={() => changeLanguage('id')}
                  style={{ textShadow: 'none' }}
                >
                  <span>Indonesia</span>
                  {i18n.language === 'id' && <span>✓</span>}
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Battery className="w-3.5 h-3.5" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }} />
        </button>
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Wifi className="w-3.5 h-3.5" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }} />
        </button>
        <button className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded">
          <Volume2 className="w-3.5 h-3.5" style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="h-6 w-6 flex items-center justify-center hover:bg-blue-500/30 transition-colors rounded"
          onClick={toggleTheme}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            <Sun className="w-3.5 h-3.5" style={{ color: '#fbbf24' }} />
          ) : (
            <Moon className="w-3.5 h-3.5" style={{ color: '#1f2937' }} />
          )}
        </button>

        <div
          className="text-xs font-medium px-2"
          style={{
            color: isDarkMode ? '#f1f5f9' : '#1f2937',
            textShadow: isDarkMode ? '0 1px 0 rgba(0, 0, 0, 0.5)' : '0 1px 0 rgba(255, 255, 255, 0.8)'
          }}
        >
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

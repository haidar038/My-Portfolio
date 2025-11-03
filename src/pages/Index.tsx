import { useState } from "react";
import { Home, User, Map, Folder, Mail } from "lucide-react";
import { Dock, DockItem } from "@/components/Dock";
import { Window } from "@/components/Window";
import { FinderWelcome } from "@/components/FinderWelcome";
import { HomeWindow } from "@/components/windows/HomeWindow";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { JourneyWindow } from "@/components/windows/JourneyWindow";
import { WorkWindow } from "@/components/windows/WorkWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import backgroundImage from "@/assets/background.jpg";

type WindowType = "home" | "about" | "journey" | "work" | "contact";

interface OpenWindow {
  id: WindowType;
  zIndex: number;
}

const Index = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(10);

  const dockItems: DockItem[] = [
    { id: "home", label: "Home", icon: Home, onClick: () => handleWindowToggle("home") },
    { id: "about", label: "About Me", icon: User, onClick: () => handleWindowToggle("about") },
    { id: "journey", label: "Journey", icon: Map, onClick: () => handleWindowToggle("journey") },
    { id: "work", label: "Work", icon: Folder, onClick: () => handleWindowToggle("work") },
    { id: "contact", label: "Contact", icon: Mail, onClick: () => handleWindowToggle("contact") },
  ];

  const handleWindowToggle = (windowId: WindowType) => {
    const isOpen = openWindows.some(w => w.id === windowId);
    
    if (isOpen) {
      // Close window
      setOpenWindows(openWindows.filter(w => w.id !== windowId));
    } else {
      // Open window with new z-index
      const newZIndex = maxZIndex + 1;
      setMaxZIndex(newZIndex);
      setOpenWindows([...openWindows, { id: windowId, zIndex: newZIndex }]);
    }
  };

  const handleWindowClose = (windowId: WindowType) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowId));
  };

  const handleWindowFocus = (windowId: WindowType) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setOpenWindows(
      openWindows.map(w => 
        w.id === windowId ? { ...w, zIndex: newZIndex } : w
      )
    );
  };

  const getWindowPosition = (index: number) => {
    // Responsive positioning
    const isMobile = window.innerWidth < 640;
    const offset = isMobile ? index * 20 : index * 30;
    const baseX = isMobile ? 10 : 100;
    const baseY = isMobile ? 20 : 50;
    return { x: baseX + offset, y: baseY + offset };
  };

  const renderWindow = (windowData: OpenWindow, index: number) => {
    const { id, zIndex } = windowData;
    
    const windowComponents = {
      home: { title: "Home", component: <HomeWindow /> },
      about: { title: "About Me", component: <AboutWindow /> },
      journey: { title: "My Journey", component: <JourneyWindow /> },
      work: { title: "My Work", component: <WorkWindow /> },
      contact: { title: "Contact Me", component: <ContactWindow /> },
    };

    const { title, component } = windowComponents[id];

    return (
      <Window
        key={id}
        title={title}
        onClose={() => handleWindowClose(id)}
        defaultPosition={getWindowPosition(index)}
        zIndex={zIndex}
        onFocus={() => handleWindowFocus(id)}
      >
        {component}
      </Window>
    );
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden touch-none"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced background overlay with Frutiger Aero vibes */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(224, 242, 254, 0.4) 0%, rgba(186, 230, 253, 0.3) 30%, rgba(125, 211, 252, 0.2) 60%, rgba(34, 211, 238, 0.1) 100%)'
        }}
      />

      {/* Finder Welcome - centered */}
      <FinderWelcome />

      {/* Windows Container */}
      <div className="relative w-full h-screen pb-16 sm:pb-20">
        {openWindows.map((windowData, index) => renderWindow(windowData, index))}
      </div>

      {/* Dock */}
      <Dock 
        items={dockItems} 
        activeItems={openWindows.map(w => w.id)}
      />
    </div>
  );
};

export default Index;

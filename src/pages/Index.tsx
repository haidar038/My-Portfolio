import { useState } from "react";
import { Home, User, Map, Folder, Mail } from "lucide-react";
import { Dock, DockItem } from "@/components/Dock";
import { Window } from "@/components/Window";
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
    const offset = index * 30;
    return { x: 100 + offset, y: 50 + offset };
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
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-100/30 via-blue-100/20 to-sky-100/30" />

      {/* Windows Container */}
      <div className="relative w-full h-screen">
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

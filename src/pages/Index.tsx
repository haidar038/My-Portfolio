import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dock, DockItem } from "@/components/Dock";
import { Window } from "@/components/Window";
import { MenuBar } from "@/components/MenuBar";
import { FinderWelcome } from "@/components/FinderWelcome";
import { HomeWindow } from "@/components/windows/HomeWindow";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { JourneyWindow } from "@/components/windows/JourneyWindow";
import { WorkWindow } from "@/components/windows/WorkWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import backgroundImage from "@/assets/materialdictionary206_35.jpg";
import HomeIcon from "@/assets/icons/HomeIcon.png";
import UserIcon from "@/assets/icons/UserIcon.png";
import JourneyIcon from "@/assets/icons/JourneyIcon.png";
import FolderIcon from "@/assets/icons/FolderIcon.png";
import MailIcon from "@/assets/icons/MailIcon.png";

type WindowType = "home" | "about" | "journey" | "work" | "contact";

interface OpenWindow {
    id: WindowType;
    zIndex: number;
    isMinimized: boolean;
    isFullscreen: boolean;
}

const Index = () => {
    const { t } = useTranslation();
    const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
    const [maxZIndex, setMaxZIndex] = useState(10);

    const dockItems: DockItem[] = [
        { id: "home", label: t('dock.home'), iconSrc: HomeIcon, onClick: () => handleWindowToggle("home") },
        { id: "about", label: t('dock.about'), iconSrc: UserIcon, onClick: () => handleWindowToggle("about") },
        { id: "journey", label: t('dock.journey'), iconSrc: JourneyIcon, onClick: () => handleWindowToggle("journey") },
        { id: "work", label: t('dock.work'), iconSrc: FolderIcon, onClick: () => handleWindowToggle("work") },
        { id: "contact", label: t('dock.contact'), iconSrc: MailIcon, onClick: () => handleWindowToggle("contact") },
    ];

    const handleWindowToggle = (windowId: WindowType) => {
        const existingWindow = openWindows.find((w) => w.id === windowId);

        if (existingWindow) {
            if (existingWindow.isMinimized) {
                // Restore from minimize
                const newZIndex = maxZIndex + 1;
                setMaxZIndex(newZIndex);
                setOpenWindows(openWindows.map((w) =>
                    w.id === windowId ? { ...w, isMinimized: false, zIndex: newZIndex } : w
                ));
            } else {
                // Close window
                setOpenWindows(openWindows.filter((w) => w.id !== windowId));
            }
        } else {
            // Open new window
            const newZIndex = maxZIndex + 1;
            setMaxZIndex(newZIndex);
            setOpenWindows([...openWindows, { id: windowId, zIndex: newZIndex, isMinimized: false, isFullscreen: false }]);
        }
    };

    const handleWindowClose = (windowId: WindowType) => {
        setOpenWindows(openWindows.filter((w) => w.id !== windowId));
    };

    const handleWindowFocus = (windowId: WindowType) => {
        const newZIndex = maxZIndex + 1;
        setMaxZIndex(newZIndex);
        setOpenWindows(openWindows.map((w) => (w.id === windowId ? { ...w, zIndex: newZIndex } : w)));
    };

    const handleWindowMinimize = (windowId: WindowType) => {
        setOpenWindows(openWindows.map((w) =>
            w.id === windowId ? { ...w, isMinimized: true } : w
        ));
    };

    const handleWindowFullscreen = (windowId: WindowType) => {
        setOpenWindows(openWindows.map((w) =>
            w.id === windowId ? { ...w, isFullscreen: !w.isFullscreen } : w
        ));
    };

    const getWindowPosition = (index: number) => {
        // Center position with random offset
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isMobile = screenWidth < 768; // Mobile breakpoint
        const windowWidth = Math.min(screenWidth * 0.85, 672); // max-w-2xl ≈ 672px
        const windowHeight = 500; // Approximate window height

        // Calculate center position
        const centerX = (screenWidth - windowWidth) / 2;
        const centerY = (screenHeight - windowHeight) / 2 - (isMobile ? 0 : 50); // No offset for mobile, -50 for desktop menu bar

        // For mobile: always centered, no random offset
        if (isMobile) {
            return {
                x: Math.max(10, centerX),
                y: Math.max(20, centerY)
            };
        }

        // For desktop: add random offset (-50 to +50 pixels)
        const randomOffsetX = Math.floor(Math.random() * 100) - 50;
        const randomOffsetY = Math.floor(Math.random() * 60) - 30;

        return {
            x: Math.max(20, centerX + randomOffsetX + (index * 20)),
            y: Math.max(40, centerY + randomOffsetY + (index * 15))
        };
    };

    const renderWindow = (windowData: OpenWindow, index: number) => {
        const { id, zIndex, isMinimized, isFullscreen } = windowData;

        if (isMinimized) return null;

        const windowComponents = {
            home: { title: t('windowTitles.home'), component: <HomeWindow /> },
            about: { title: t('windowTitles.about'), component: <AboutWindow /> },
            journey: { title: t('windowTitles.journey'), component: <JourneyWindow /> },
            work: { title: t('windowTitles.work'), component: <WorkWindow /> },
            contact: { title: t('windowTitles.contact'), component: <ContactWindow /> },
        };

        const { title, component } = windowComponents[id];

        return (
            <Window
                key={id}
                title={title}
                onClose={() => handleWindowClose(id)}
                onMinimize={() => handleWindowMinimize(id)}
                onFullscreen={() => handleWindowFullscreen(id)}
                defaultPosition={getWindowPosition(index)}
                zIndex={zIndex}
                onFocus={() => handleWindowFocus(id)}
                isFullscreen={isFullscreen}
            >
                {component}
            </Window>
        );
    };

    return (
        <div
            className="w-full relative overflow-hidden touch-none mobile-bg-scroll"
            style={{
                minHeight: "100vh",
                minHeight: "100dvh", // Dynamic viewport height for mobile
                height: "100%",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Enhanced overlay with Frutiger Aero vibes */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at top, rgba(135, 206, 250, 0.3) 0%, rgba(100, 180, 240, 0.25) 30%, rgba(70, 150, 220, 0.2) 60%, rgba(50, 120, 200, 0.15) 100%)",
                    minHeight: "100vh",
                    minHeight: "100dvh",
                }}
            />

            {/* Menu Bar */}
            <MenuBar />

            {/* Finder Welcome - centered */}
            <FinderWelcome onMoreInfoClick={() => handleWindowToggle("home")} />

            {/* Windows Container */}
            <div
                className="relative w-full pt-0 md:pt-6 pb-24"
                style={{
                    minHeight: "100vh",
                    minHeight: "100dvh",
                }}
            >
                {openWindows.map((windowData, index) => renderWindow(windowData, index))}
            </div>

            {/* Dock */}
            <Dock items={dockItems} activeItems={openWindows.filter(w => !w.isMinimized).map((w) => w.id)} />
        </div>
    );
};

export default Index;

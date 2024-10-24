import React, { useEffect, useRef } from 'react';
import './AccessibilityMenu.css'; 

const AccessibilityMenu = () => {
    const menuRef = useRef(null);
    
    const [accessibilityState, setAccessibilityState] = React.useState({
        highContrast: false,
        invertedColors: false,
        largeText: false,
        simplifiedContent: false,
        largeCursor: false
    });

    const toggleState = (key) => {
        setAccessibilityState(prevState => {
            const newState = { ...prevState, [key]: !prevState[key] };
            return newState;
        });
    };

    useEffect(() => {
        // Clear existing classes
        document.body.classList.remove('high-contrast', 'inverted', 'large-text', 'simplified-content');

        // Apply active classes based on state
        if (accessibilityState.highContrast) document.body.classList.add('high-contrast');
        if (accessibilityState.invertedColors) document.body.classList.add('inverted');
        if (accessibilityState.largeText) document.body.classList.add('large-text');
        if (accessibilityState.simplifiedContent) document.body.classList.add('simplified-content');
        document.body.style.cursor = accessibilityState.largeCursor ? 'url("path_to_large_cursor.png"), auto' : 'default';
    }, [accessibilityState]);

    useEffect(() => {
        // Make the menu draggable
        const menu = menuRef.current;
        if (menu) {
            makeDraggable(menu);
        }
    }, []);

    const makeDraggable = (elmnt) => {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    };

    return (
        <div ref={menuRef} id="accessibility-menu" className="accessibility-menu">
            <button onClick={() => toggleState('highContrast')}>ניגודיות גבוהה</button>
            <button onClick={() => toggleState('invertedColors')}>צבעים הפוכים</button>
            <button onClick={() => toggleState('largeText')}>טקסט גדול</button>
            <button onClick={() => toggleState('simplifiedContent')}>פשט את התוכן</button>
            <button onClick={() => toggleState('largeCursor')}>סמן גדול</button>
        </div>
    );
};

export default AccessibilityMenu;

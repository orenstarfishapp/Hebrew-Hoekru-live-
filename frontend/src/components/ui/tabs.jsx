import React, { useState } from 'react';

const Tabs = ({ defaultValue, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const modifiedChildren = React.Children.map(children, (child) => {
    if (child.type === TabsList) {
      return React.cloneElement(child, { activeTab, setActiveTab });
    } else if (child.type === TabsContent) {
      return React.cloneElement(child, { activeTab });
    }
    return child;
  });

  return <div className={className}>{modifiedChildren}</div>;
};

const TabsList = ({ children, activeTab, setActiveTab, className = '' }) => {
  const modifiedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { activeTab, setActiveTab })
  );

  return <div className={className}>{modifiedChildren}</div>;
};

const TabsTrigger = ({ value, activeTab, setActiveTab, children, className = '' }) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`${isActive ? 'bg-white shadow-md' : 'hover:bg-gray-50 transition-all duration-300 py-4'} ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, activeTab, children, className = '' }) => {
  if (activeTab !== value) return null;

  return <div className={className}>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };

import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  return (
    <button onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>
      {children}
    </button>
  );
}

function Panel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? <div>{children}</div> : null;
}

export { Tabs, Tab, Panel };

import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../componentStyling/TabbedBox.css";

export interface TabData {
    eventKey: string;
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface TabbedBoxProps {
    tabs: TabData[];
    defaultActiveKey: string;
    id?: string;
    className?: string
}

const TabbedBox: React.FC<TabbedBoxProps> = ({
                                                 tabs, defaultActiveKey, id, className
                                             }) => {
    return (<div className="tabbedBox dont-style">
            <Tabs
                defaultActiveKey={defaultActiveKey}
                id={id || `tabbed-box-${id}`}
                className="navTabs dont-style nav-fill"
            >
                {tabs.map((tab) => (<Tab
                        key={tab.eventKey}
                        eventKey={tab.eventKey}
                        title={tab.title}
                        disabled={tab.disabled || false}
                        tabClassName={`navLink ${tab.eventKey}-tab`}
                    >
                        <div className={`tabWrapper ${tab.eventKey}-wrapper`}>
                            <div className={`tabContent ${className}`}>{tab.content}</div>
                        </div>
                    </Tab>))}
            </Tabs>
        </div>);
};

export default TabbedBox;

/* How to implement tabbed boxes:

  const BoxName: TabData[] = [
    {
      eventKey: "design",
      title: "Tabname",
      content: <p>Content for Box - Design</p>,
    },
    {
      eventKey: "build",
      title: "Build",
      content: <p>Content for pH Sensor - Build</p>,
    },
    {
      eventKey: "test",
      title: "Test",
      content: <p>Content for pH Sensor - Test</p>,
    },
    {
      eventKey: "learn",
      title: "Learn",
      content: <p>Content for pH Sensor - Learn</p>,
    },
  ];
  */
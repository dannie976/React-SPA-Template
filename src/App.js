// REACT imports
import { useState } from 'react';

// components imports
import PageNavigation from './components/nav/PageNavigation';
import Dashboard from './components/dashboard/Dashboard';
import ComingSoon from './components/coming-soon/ComingSoon';

// icon imports
import icon_home from './icons/heim.svg';
import icon_rocket from './icons/raketen-mittagessen.svg';

function App() {

    const dashboardPage = <Dashboard/>;
    const comingSoonPage = <ComingSoon/>;

    const menuItems = [
        { id: 0, icon: icon_home, title: "Dashboard", badge: "0", description: "Startseite", content: dashboardPage},
        { id: 1, icon: icon_rocket, title: "More coming soon!", badge: "0", description: "...", content: comingSoonPage },
    ];

    const [currentMenuItem, setCurrentMenuItem] = useState(0); // default content: dashboard (id 0)
    const [menuExpanded, setExpanded] = useState(false);

    function handleMenuItemSelection(menuItemsId) {
        setCurrentMenuItem(menuItemsId);
        setExpanded(false);
        console.log("Switched to >>", menuItems[menuItemsId].title, "<<");
    }

    return (
        <div>
            <PageNavigation
                whenClicked={handleMenuItemSelection}
                menuItems={menuItems}
                menuExpanded={menuExpanded}
                setExpanded={setExpanded}
            />
            {menuItems[currentMenuItem].content}
        </div>
    );

}

export default App;
//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
import {
    HashRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";
// Local
import Header from "@components/Header";
import HomePage from "./HomePage";
import PlanningPage from "./PlanningPage";
import SetupPage from "./SetupPage";
import AdvantagesPage from "./AdvantagesPage";
import ContactPage from "./ContactPage";
import WatchMePage from "./WatchMePage";
import Footer from "@components/Footer";
import SidePanel from "@components/SidePanel";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    return (<Router>

        <Header/>

        <SidePanel/>

        <Switch>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/planning" element={<PlanningPage/>}/>
            <Route path="/setup" element={<SetupPage/>}/>
            <Route path="/advantages" element={<AdvantagesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/watchme" element={<WatchMePage/>}/>
        </Switch>

        <Footer/>
    </Router>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
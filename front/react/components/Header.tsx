//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Image from "./Image";
import Link from "./Link";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

function TabHeader({ defVal, page }): JSX.Element
{    
    return (<Link
        defVal={defVal} to={page}
        iStyle="py-3 px-6 whitespace-nowrap text-sm md:text-base font-bold"
        bottomToolTip
    />)
}

//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    return (<header className="fixed top-0 flex px-12 py-3 w-full z-10 secondary shadow shadow-black/50">
        <Image 
            defVal="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
            cStyle="hidden lg:block w-12 mr-8"
            iStyle="aspect-square rounded-xl shadow shadow-black/50"    
            bottomToolTip
        />

        <TabHeader defVal="Accueil" page=""/>
        <TabHeader defVal="Mon planning" page="planning"/>
        <TabHeader defVal="Mon set-up" page="setup"/>
        <TabHeader defVal="Avantages subs" page="advantages"/>
        <TabHeader defVal="Contact" page="contact"/>
        <TabHeader defVal="Regarde-moi!" page="watchme"/>
    </header>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
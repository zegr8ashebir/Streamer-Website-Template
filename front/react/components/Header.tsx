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

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    const iStyle = "py-3 px-6 whitespace-nowrap text-sm md:text-base font-bold"

    return (<header className="fixed top-0 flex px-12 py-3 w-full z-10 secondary shadow shadow-black/50">
        <Image 
            defVal="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
            cStyle="hidden lg:block w-12 mr-8"
            iStyle="aspect-square rounded-xl shadow shadow-black/50"    
            bottomToolTip
        />

        <Link page="header" tag="home" iStyle={iStyle} bottomToolTip/>
        <Link page="header" tag="planning" iStyle={iStyle} bottomToolTip/>
        <Link page="header" tag="setup" iStyle={iStyle} bottomToolTip/>
        <Link page="header" tag="advantages" iStyle={iStyle} bottomToolTip/>
        <Link page="header" tag="contact" iStyle={iStyle} bottomToolTip/>
        <Link page="header" tag="watchme" iStyle={iStyle} bottomToolTip/>

    </header>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Link from "./Link";
import List from "./List"

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    return (<footer className="flex flex-col items-center tertiary p-8 gap-8">
        <div className="flex gap-8">
            <List
                defVal={[
                    <Link iStyle="font-bold hover:underline" defVal="Twitter" to="https://twitter.com/AssoElkir" linkEditable/>,
                    <Link iStyle="font-bold hover:underline" defVal="Facebook" to="https://www.facebook.com/AssoElkir/" linkEditable/>,
                    <Link iStyle="font-bold hover:underline" defVal="LinkedIn" to="https://www.linkedin.com/company/association-elkir/" linkEditable/>,
                    <Link iStyle="font-bold hover:underline" defVal="Instagram" to="https://www.instagram.com/AssoElkir/" linkEditable/>,
                    <Link iStyle="font-bold hover:underline" defVal="Youtube" to="https://www.youtube.com/channel/UC-RGKxhJqA3dBX62Fdcy_ig" linkEditable/>,
                    <Link iStyle="font-bold hover:underline" defVal="Discord" to="https://discord.com/invite/elkir" linkEditable/>
                ]}
                defEl={<Link iStyle="font-bold hover:underline" defVal="Nouveau lien" to="https://elkir.fr" linkEditable/>}
                style="gap-8 flex" bottomToolTip
            />
        </div>
        
        <hr className="border-zinc-800/50 w-1/2"/>

        <div className="flex justify-around items-center w-1/2">
            <button  onClick={() => window.open("https://elkir.fr/mentions-legales", "_blank")?.focus()} className="hover:underline">
                Mentions légales et<br/>politique de confidentialité
            </button>

            <img id="elkir-logo" className="cursor-pointer" onClick={() => window.open("https://elkir.fr", "_blank")?.focus()} src="https://cdn.elkir.fr/assets/img/logo-dark.png"/>

            <p>© 2023 Paul Bernet</p>
        </div>
        
    </footer>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
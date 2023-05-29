//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    const [dark, setDark] = useState(false);

    return (<aside className={`z-10 side-panel ${dark ? "bg-zinc-800" : "bg-zinc-200"} top-1/2 fixed flex flex-col gap-2 w-80 right-0 p-8 rounded-l-xl shadow-lg shadow-black/50`}>
        <div className="flex justify-end items-center gap-2">
            <label>Couleur primaire</label>
            <input type="color" defaultValue="#fafafa" onChange={e => document.body.style.setProperty("--primary-color", e.target.value)}/>
        </div>
        <div className="flex justify-end items-center gap-2">
            <label>Couleur secondaire</label>
            <input type="color" defaultValue="#e4e4e7" onChange={e => document.body.style.setProperty("--secondary-color", e.target.value)}/>
        </div>
        <div className="flex justify-end items-center gap-2">
            <label>Couleur tertiaire</label>
            <input type="color" defaultValue="#a1a1aa" onChange={e => document.body.style.setProperty("--tertiary-color", e.target.value)}/>
        </div>
        <div className="flex justify-end items-center gap-2">
            <label>Couleur d'accentuation</label>
            <input type="color" defaultValue="#0ea5e9" onChange={e => document.body.style.setProperty("--accentuation-color", e.target.value)}/>
        </div>
        <div className="flex justify-end items-center gap-2">
            <label>Adapter pour couleurs sombres?</label>
            <input onChange={e => {
                setDark(e.target.checked);

                if (e.target.checked)
                {
                    document.body.classList.remove("txt-light");
                    document.body.classList.add("txt-dark");
                    document.getElementById("elkir-logo")?.setAttribute("src", "https://cdn.elkir.fr/assets/img/logo-light.png");
                }
                else
                {
                    document.body.classList.remove("txt-dark");
                    document.body.classList.add("txt-light");
                    document.getElementById("elkir-logo")?.setAttribute("src", "https://cdn.elkir.fr/assets/img/logo-dark.png");
                }
            }} type="checkbox"/>
        </div>
    </aside>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
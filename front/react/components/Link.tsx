//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import BaseInput from "./BaseInput";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ bottomToolTip = false, cStyle = "",  defVal, iStyle = "", linkEditable = false, to }): JSX.Element
{
    const [text, setText] = useState(defVal);
    const [url, setURL] = useState(to);

    return (<BaseInput bottomToolTip={bottomToolTip} icon="link" type="Lien" style={cStyle} editButton
        onEdit={() => {
            const txt = window.prompt("Texte à l'intérieur du lien", text);
            if (txt) setText(txt);

            if (linkEditable)
            {
                const new_url = window.prompt("Hyperlien", url);
                if (new_url) setURL(new_url);
            }
        }}>
        <button onClick={() =>
        {
            if (!linkEditable)
            {
                location.href = `/#/${to}`;

                // Réajuster la taille des paragraphes
                setTimeout(() =>
                {
                    document.querySelectorAll("textarea").forEach(paragraph =>
                    {
                        paragraph.style.height = "0";
                        paragraph.style.height = `${paragraph.scrollHeight}px`;
                    });
                }, 500);
            }
            else window.open(url, "_blank")?.focus();
            
            
        }} className={iStyle}>
            {text}
        </button>
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
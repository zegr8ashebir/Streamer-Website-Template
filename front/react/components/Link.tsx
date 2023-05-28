//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import BaseInput from "./BaseInput";
import { useEditor } from "@context/Editor";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ page, tag, bottomToolTip = false, cStyle = "",  iStyle = "", linkEditable = false }): JSX.Element
{
    const { editor, edit } = useEditor();

    const [text, setText] = useState(editor[page][tag][0]);
    const [url, setURL] = useState(editor[page][tag][1]);

    return (<BaseInput bottomToolTip={bottomToolTip} icon="link" type="Lien" style={cStyle} editButton
        onEdit={() => {
            const txt = window.prompt("Texte à l'intérieur du lien", text);
            if (txt)
            {
                setText(txt);
                if (!linkEditable) edit(page, tag, [txt, url]);
            }

            if (linkEditable)
            {
                const new_url = window.prompt("Hyperlien", url);
                if (new_url)
                {
                    setURL(new_url);
                    edit(page, tag, [txt, new_url]);
                }
                else edit(page, tag, [txt, url]);
            }
        }}>
        <button onClick={() =>
        {
            if (!linkEditable) location.href = `/#/${url}`;
            else window.open(url, "_blank")?.focus();
        }} className={iStyle}>
            {text}
        </button>
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
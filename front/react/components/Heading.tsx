//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import BaseInput from "./BaseInput";
import { useEditor } from "@context/Editor";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ page, tag, bottomToolTip = false, cStyle = "", iStyle = "" }): JSX.Element
{
    const { editor, edit } = useEditor();

    return (<BaseInput bottomToolTip={bottomToolTip} icon="heading" type="Titre" style={cStyle}>
        <input
            className={`outline-none truncate bg-transparent border-none w-full h-full overflow-y-hidden ${iStyle}`}
            defaultValue={editor[page][tag]} placeholder={editor[page][tag]} type="text"
            onChange={({ target }) => edit(page, tag, target.value)}
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
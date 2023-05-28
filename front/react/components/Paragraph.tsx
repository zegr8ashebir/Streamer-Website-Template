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

    return (<BaseInput bottomToolTip={bottomToolTip} icon="paragraph" type="Paragraphe" style={`h-fit ${cStyle}`}>
        <textarea onInput={({ nativeEvent: { target } }) =>
        {
            //@ts-expect-error
            target.style.height = "0";
            //@ts-expect-error
            target.style.height = `${target.scrollHeight}px`;
        }}
            onChange={({ target }) => edit(page, tag, target.value)}
            className={`indent-8 outline-none border-none resize-none overflow-y-hidden w-full h-auto bg-transparent ${iStyle}`}
            defaultValue={editor[page][tag]} placeholder={editor[page][tag]}
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
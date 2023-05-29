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

export default function({ page, tag, bottomToolTip = false, cStyle = "", iStyle = "" }): JSX.Element
{
    const { editor } = useEditor();
    
    return (<BaseInput bottomToolTip={bottomToolTip} icon="image" type="Image" style={cStyle}>
        <input
            style={{ backgroundImage: `url("./uploads/${editor[page][tag]}.webp")`}}
            type="file"
            onChange={({ target }) =>
            {
                if (target.files)
                {
                    const body = new FormData();
                    body.append("image_file", target.files[0]);
                    body.append("image_tag", tag);

                    fetch("./php/upload.php", { method: "POST", body })
                        .then(async (response) => alert(await response.json()));
                }
            }}
            className={`w-full bg-cover bg-center ${iStyle}`}
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
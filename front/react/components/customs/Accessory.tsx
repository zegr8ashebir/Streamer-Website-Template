//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import BaseInput from "./../BaseInput";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ bottomToolTip = false, cStyle = "", iStyle = "", lStyle = "", defImg, defName }): JSX.Element
{
    const [image, setImage] = useState(defImg);

    return (<BaseInput bottomToolTip={bottomToolTip} icon="headset" type="Accessoire" style={cStyle}>
        <img
            onClick={() => {
                const img = window.prompt("URL d'une photographie de l'accessoire", image);
                if (img) setImage(img);
            }}
            src={image}
            className={`w-full object-cover ${iStyle}`}
        />
        <input
            className={`truncate hover:outline-1 hover:outline hover:outline-blue-600 hover:outline-offset-0 focus:outline-1 focus:outline focus:outline-offset-0 focus:outline-blue-600 bg-transparent border-none overflow-y-hidden ${lStyle}`}
            defaultValue={defName} placeholder={defName} type="text"
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
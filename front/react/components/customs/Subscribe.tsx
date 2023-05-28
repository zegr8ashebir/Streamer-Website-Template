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

export default function({ bottomToolTip = false, cStyle = "", iStyle = "", defVal }): JSX.Element
{
    const [image, setImage] = useState(defVal);
    
    return (<BaseInput bottomToolTip={bottomToolTip} icon="image" type="Image" style={cStyle}>
        <img
            onClick={() => {
                const img = window.prompt("URL de l'image", defVal);
                if (img) setImage(img);
            }}
            src={image}
            className={`w-full bg-cover bg-center ${iStyle}`}
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import BaseInput from "./BaseInput";
import Icon from "./Icon";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({ bottomToolTip = false, cStyle = "", iStyle = "", dStyle = "", defVal, defDesc }): JSX.Element
{
    return (<BaseInput bottomToolTip={bottomToolTip} icon="mobile" type="Téléphone" style={cStyle}>
        <Icon icon="mobile"/>
        <input
            className={`w-48 hover:outline-1 hover:outline hover:outline-blue-600 hover:outline-offset-0 focus:outline-1 focus:outline focus:outline-offset-0 focus:outline-blue-600 truncate bg-transparent border-none h-full overflow-y-hidden ${iStyle}`}
            defaultValue={defVal} placeholder={defVal} type="tel"
        />
        <input
            className={`w-96 hover:outline-1 hover:outline hover:outline-blue-600 hover:outline-offset-0 focus:outline-1 focus:outline focus:outline-offset-0 focus:outline-blue-600 truncate bg-transparent border-none h-full overflow-y-hidden ${dStyle}`}
            defaultValue={defDesc} placeholder={defDesc} type="text"
        />
    </BaseInput>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
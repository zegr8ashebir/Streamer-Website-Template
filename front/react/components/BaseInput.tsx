//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React, { useState } from "react";
// Local
import Icon from "./Icon";
import ToolTip from "./ToolTip";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function({
    isList = false, bottomToolTip, children, editButton = false, onAdd = () => { },
    onEdit = () => { }, onRemove = () => { }, icon, style = "", type }): JSX.Element
{
    const [toolTipHidden, setToolTipHidden] = useState(true);

    return (<div className={`relative hover:outline-1 hover:outline hover:outline-blue-600 focus-within:outline-1 focus-within:outline focus-within:outline-blue-600 ${style}`} onMouseEnter={() => setToolTipHidden(false)} onMouseLeave={() => setToolTipHidden(true)}>
        {children}
        <ToolTip style={`${bottomToolTip ? "rounded-b bottom-tooltip" : "rounded-t top-tooltip"} absolute px-2`} hidden={toolTipHidden}><Icon icon={icon}/> {type}{ editButton ? <> | <button onClick={onEdit}><Icon icon="gear"/></button></> : <></> }</ToolTip>
        { isList && !toolTipHidden ?
            <div className="absolute flex flex-col gap-1 right-tooltip top-1/2 right-0.5">
                <ToolTip style="static rounded"><button className="px-1" onClick={onAdd}><Icon icon="plus"/></button></ToolTip>
                <ToolTip style="static rounded"><button className="px-1" onClick={onRemove}><Icon icon="minus"/></button></ToolTip>    
            </div>
        : <></> }
    </div>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
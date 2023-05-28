//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Heading from "@components/Heading";
import List from "@components/List";
import Accessory from "@components/customs/Accessory";
import Paragraph from "@components/Paragraph";
import Section from "@components/Section";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export default function(): JSX.Element
{
    const
        cStyle = "w-40 xl:w-48",
        iStyle = "rounded-xl shadow shadow-black/50",
        lStyle = "absolute top-3/4 bg-white text-right w-full font-bold px-4";

    return (<Section style="flex flex-col justify-center items-center pt-20 pb-10 gap-8 primary">
        <Heading
            page="setup" tag="title"
            cStyle="w-3/4"
            iStyle="font-poppins text-center text-4xl lg:text-5xl xl:text-6xl"
        />
        <List
            style="flex flex-wrap justify-center gap-4 w-3/4 xl:w-1/2 text-zinc-800"

            defVal={[
                <Accessory
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}           
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defName="Mon casque"
                />,
                <Accessory
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}  
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defName="Mon clavier"
                />,
                <Accessory
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}  
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defName="Ma sourris"
                />,
                <Accessory
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}  
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defName="Mon micro"
                />
            ]}

            defEl={<Accessory
                cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}  
                defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                defName="Nouvel accessoire"
            />}

            bottomToolTip
        />
        <Paragraph
            page="setup" tag="description"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="text-xl text-justify"
        />
    </Section>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
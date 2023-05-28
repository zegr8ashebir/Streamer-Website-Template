//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React
import React from "react";
// Local
import Heading from "@components/Heading";
import List from "@components/List";
import Advantage from "@components/customs/Advantage";
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
        cStyle = "flex gap-2 block mb-4",
        iStyle = "w-8 rounded-xl shadow shadow-black/50",
        lStyle = "text-lg w-80";

    return (<Section style="flex flex-col justify-center items-center pt-20 pb-10 gap-8 primary">
        <Heading
            page="advantages" tag="title"
            cStyle="w-3/4"
            iStyle="font-poppins text-center text-4xl lg:text-5xl xl:text-6xl"
        />
        <List
            style="lg:columns-2 lg:gap-4 xl:columns-3"

            defVal={[
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle} 
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Bénéficie d'émoticônes personnalisées."
                />,
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle} 
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Aborde un badge d'abonné."
                />,
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle} 
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Multiplicateur de points de chaîne."
                />,
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}  
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Visionnage sans publicité."
                />,
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle} 
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Accède à un chat réservé aux abonnés."
                />,
                <Advantage
                    cStyle={cStyle} iStyle={iStyle} lStyle={lStyle} 
                    defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                    defDesc="Accède à des streams pour abonnés."
                />
            ]}

            defEl={<Advantage
                cStyle={cStyle} iStyle={iStyle} lStyle={lStyle}
                defImg="https://cdn.elkir.fr/assets/img/avatars/img-benevole.jpg"
                defDesc="Courte description du nouvel avantage." 
            />}
            
            bottomToolTip 
        />
        <Paragraph
            page="advantages" tag="description"
            cStyle="w-3/4 xl:w-1/2"
            iStyle="text-xl text-justify"
        />
    </Section>);
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
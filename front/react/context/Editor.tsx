//----------------------------------------------------------------
//#region Importations
//----------------------------------------------------------------

// React.js
import React, { createContext, useContext } from "react";

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Définitions
//----------------------------------------------------------------

var editor =
{
    header:
    {
        logo: "5807dd602664a565fe53cf2d203674b388d7b2d1",
        home: ["Accueil", ""],
        planning: ["Mon planning", "planning"],
        setup: ["Mon set-up", "setup"],
        advantages: ["Avantages subs", "advantages"],
        contact: ["Contact", "contact"],
        watchme: ["Regarde-moi!", "watchme"]
    },
    home:
    {
        pseudonym: "Pseudonyme",
        note: "Surnom ou note",
        title: "Qui suis-je?",
        description_1: "Salut à toutes et à tous! Je suis un.e Streamer.euse et partenaire d'Elkir, venez visiter ma chaîne, la bonne entente et l'amusement y règnent!",
        description_2: "Ainsi, je suis quelqu'un qui aime les pizzas à l'ananas et les compétitions de lancer de thon, si tu n'est pas d'accord avec moi, viens en débattre sur ma chaîne! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis a metus et facilisis. Donec turpis libero, congue in scelerisque at, tempus sit amet arcu. Aenean varius faucibus neque et tincidunt. Integer vestibulum elit tortor, sed consequat metus sodales quis. Integer placerat imperdiet sollicitudin. Maecenas interdum dui a erat suscipit, porttitor bibendum sapien sodales. Integer eget purus condimentum tortor fringilla gravida.",
        watchme_link: ["Regarde-moi!", "watchme"],
        photo: "eeb35d331bddcddfdbb0a6d16f64120bb01356fd"
    },
    planning:
    {
        title: "Mon planning",
        planning: "bdf5c73d18f44e2997e2dd1348b16d350106f6e2",
        description: "J'ai pris l'habitude de streamer tous les mardis soir, nous jouons généralement à des jeux-vidéos en tout genre! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam iaculis venenatis. Pellentesque gravida nulla non nibh laoreet malesuada."
    },
    setup:
    {
        title: "Tu veux le même set-up?",
        description: "Si tu apprécies mon set-up, je te donne ici quelques détails sur le matériel que j'utilise. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id faucibus magna. Fusce ultrices quam nisi, sit amet venenatis urna pretium fringilla. Phasellus tempus turpis quis arcu pharetra, id bibendum dolor congue."
    },
    advantages:
    {
        title: "Les avantages d'être sub!",
        description: "Bien sûr, tout cela sans oublier mes mille remerciements! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex odio, interdum eget ligula eu, pulvinar sodales lorem. In hac habitasse platea dictumst. Proin gravida ultrices augue, in volutpat sapien maximus quis."
    },
    contact:
    {
        title: "Des questions?",
        description: "Voici mes options de contact, n'hésitez pas à me contacter en cas de question ou de demandes professionelles me concernant. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris condimentum, volutpat odio id, dignissim lacus. In quis ligula lorem."
    },
    watchme:
    {
        title: "Stream en cours...",
        channel: "associationelkir",
        description: "Selon une étude scientifique, regarder mes streams rendrait deux fois plus intelligent! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum augue, eu tincidunt tellus varius vitae. Curabitur porta justo gravida, elementum turpis quis, porta purus."
    },
    footer:
    {

    }
};

const context = createContext({ editor: { }, edit: (page: string, tag: string, value: any) => { } });

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Fonctions
//----------------------------------------------------------------

function edit(page: string, tag: string, value: any) { editor[page][tag] = value; }

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------

//----------------------------------------------------------------
//#region Exportations
//----------------------------------------------------------------

export function useEditor() { return useContext(context) };

export function EditorContext({ children })
{
    return (<context.Provider value={{ editor, edit }}>
        {children}
    </context.Provider>)
}

//----------------------------------------------------------------
//#endregion
//----------------------------------------------------------------
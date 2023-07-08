import React from "react";
// import data from "./Moki";

const Test = () => {
    const txt =
        '<?xml version="1.0" encoding="utf-8"?><scandoc><sentence><entity type="company" local-id="0"><entity type="company" local-id="4">Оператор сети Tele2 </entity></entity>приступил к реструктуризации компании с последующим выделением башенного бизнеса в самостоятельное юрлицо.&lt;/span&gt;&lt;/span&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;</sentence><sentence>T24&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;span&gt;&lt;span&gt;<entity type="company" local-id="1">"Т2 РТК холдинг" </entity>(работает под брендом <entity type="company" local-id="0">Tele2</entity>, принадлежит <entity type="company" local-id="2">"&lt;/span&gt;&lt;span&gt;Ростелекому&lt;/span&gt;&lt;span&gt;"</entity>) 7 июля начал реструктуризацию, обнаружил <entity type="company" local-id="5">"Ъ" </entity>в <entity type="company" local-id="3">"СПАРК-Интерфакс"</entity>.&lt;/span&gt;&lt;/span&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;</sentence><sentence><speech author-local-id="0">Коммерсантъ&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;span&gt;&lt;span&gt;Последняя отойдет к "Пилар", уточнили в <entity type="company" local-id="0">Tele2</entity>: "Формирование <entity type="company" local-id="2">башенной компании </entity>пока не завершено</speech>. </sentence><sentence>Мы рассматриваем разные варианты управления инфраструктурой".&lt;/span&gt;&lt;/span&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;</sentence><sentence><entity type="theme" local-id="6"><entity type="theme" local-id="7">Коммерсантъ&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;span&gt;&lt;span&gt;По итогам 2020 года, предоставляет услуги сотовой связи более чем 46,6 млн абонентам.&lt;/span&gt;&lt;/span&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;</entity></entity></sentence><sentence>T24&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;div&gt;&lt;span aria-label="Источник: T24"&gt;&lt;div&gt;&lt;/div&gt;&lt;/span&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;Tele2 выделяет башенные активы для последующей продажи&lt;/div&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;T24&lt;/span&gt;&lt;span&gt;09:04&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div&gt;&lt;span aria-label="Источник: Коммерсантъ"&gt;&lt;div&gt;&lt;/div&gt;&lt;/span&gt;&lt;div&gt;&lt;div&gt;&lt;div&gt;Tele2 шагнул по вертикали&lt;/div&gt;&lt;div&gt;&lt;span&gt;&lt;span role="presentation"&gt;&lt;span&gt;Коммерсантъ&lt;/span&gt;&lt;span&gt;01:24&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;Показать все источники&lt;/div&gt;&lt;/body&gt;\r\n&lt;/data&gt;\r\n\r\n</sentence></scandoc>';
    const parsingXML = (txt) => {
        const textParser = new DOMParser();
        const doc = textParser.parseFromString(txt, "text/xml");
        console.log(doc.querySelector("scandoc"));
        let content = "";
        doc.querySelector("scandoc").childNodes.forEach((node) => {
            if (node.textContent.find("img")) {
                console.log(node.textContent)
            }
            content += node.textContent
            // if (node.innerHTML.match(/[а-я ]/gi)) {
            //     content += node.innerHTML.match(/[а-я ]/gi).join("");
            // }
        });
        return content.replace(/(<([^>]+)>)/gi, " ");
    };

    return <>{parsingXML(txt)};</>;
};

export default Test;

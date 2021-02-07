const toReplace = 'black friday|blackfriday|black-friday';

const advices = {
    'fr': [
        'Je n\'achète que ce dont j\'ai vraiment besoin',
        'J\'éteins mes appareils en veille !',
        'Je composte les épluchures !',
        'Je chauffe mon logement à 19°C!',
        'Je prends un vélo au lieu de la voiture pour des courtes distances !',
        'Je cherche une AMAP proche de chez moi !',
        'Je mange moins de viande !',
        'Je donne au lieu de jeter !',
        'Je loue au lieu d\'acheter !',
        'Je privilégie les achats d\'occasion !'
    ],
    'en': [
        'I buy only what I really need!',
        'I turn off my devices which remains on standby!',
        'I compost the peelings!',
        'I warm my home to 19°C!',
        'I take a bike instead of the car for short distances!',
        'I don\'t buy products that create waste!',
        'I eat local products!',
        'I eat less meat!',
        'I favor second hand products!'
    ],
};

const getRandomAdvice = () => advices[language][Math.floor(Math.random() * advices[language].length)];
const navigatorLanguage = navigator.language || navigator.userLanguage;
const language = 'fr' === navigatorLanguage.toLowerCase().substr(0, 2) ? 'fr' : 'en';

if (document.body) {
    let textNode;
    const documentTreeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const regexp = new RegExp(toReplace, 'gi');

    while (textNode = documentTreeWalker.nextNode()) {
        textNode.nodeValue = textNode.nodeValue.replace(regexp, getRandomAdvice());
    }

    if (document.title) {
        document.title = document.title.replace(regexp, getRandomAdvice());
    }
}



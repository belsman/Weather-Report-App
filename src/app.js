import model from './models/weatherappmodel';
import nav from './views/navigation';
import weatherCard from './views/weather_report';


export default () => {
    const root = document.querySelector('div#content');
    root.innerHTML = nav();

    model.load('london').then(result => {
        const parseResult = model.parseData(result);
        root.insertAdjacentHTML('beforeend', weatherCard(parseResult));
    });
};

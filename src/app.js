import model from './models/weatherappmodel';
import nav from './views/navigation';
import weatherCard from './views/weather_report';
import spinner from './views/spinner';
import notFound from './views/not_found';
import './style.css';

export default () => {
    const root = document.querySelector('div#content');

    root.innerHTML = nav();

    model.load('london').then(result => {
        const parseResult = model.parseData(result);
        root.insertAdjacentHTML('beforeend', weatherCard(parseResult));
    });

    const searchLocationForm = document.searchLocationForm;

    searchLocationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const weatherContainer = document.querySelector('div#weather-report-card');
        if (weatherContainer) weatherContainer.remove();
        root.insertAdjacentHTML('beforeend', spinner());
        let searchTerm = e.target.elements['search-location'].value;
        model.load(searchTerm)
          .then( result => {
            const parseResult = model.parseData(result);
            let spinnerElement = document.querySelector('div.loader');
            spinnerElement.remove();
            root.insertAdjacentHTML('beforeend', weatherCard(parseResult));
          })
          .catch(e => {
            let spinnerElement = document.querySelector('div.loader');
            let notFoundElement = document.querySelector('div.not-found');
            if (notFoundElement) notFoundElement.remove();
            spinnerElement.remove();
            root.insertAdjacentHTML('beforeend', notFound(searchTerm));
          });
    });
};

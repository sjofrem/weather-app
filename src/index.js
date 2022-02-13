import weather from './modules/weather'
import view from './modules/view'

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

async function displaySearch(city) {

    const data = await weather.getData(city);
    
    if(!data) {
        searchForm.reset();
        return 
    }

    view.setCityWeather(data);

}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    displaySearch(searchBar.value);

    searchForm.reset();

})

displaySearch('London');

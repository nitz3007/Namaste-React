export function filterRestaurants (searchText, restaurants) {
    const filteredData = restaurants.filter((res) => 
        res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}

export const fetchData = () => {
    return fetch("https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks")
        .then(response => response.json())
        .then(data => data.kidBooks)
};

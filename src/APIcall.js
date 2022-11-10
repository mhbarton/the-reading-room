export const fetchData = async () => {
    return await fetch("https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks");
};
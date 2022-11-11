export const fetchData = () => {
    return fetch("https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks")
        .then(response => response.json())
        .then(data => data.kidBooks)
};

// const fetchData = () => {
//     return fetch('https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks')
//     .then(response => {
//       if (!response.ok) {
//           throw new Error('Not a 200 status')
//       }
//       return response.json()
//     })
//   };

//   export default { fetchData }
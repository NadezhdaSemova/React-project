const url = 'http://localhost:3030/api/places';

export const getAll = async () => {
    const response = await fetch(url);
    const result = await response.json();

    return result;
};

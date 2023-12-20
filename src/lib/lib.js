export default function truncateString(str, truncateLength = 15) {
  if (str.length > truncateLength) {
    return `${str.slice(0, truncateLength)}...`;
  }
  return str;
}

export const errorLocationCallback = (error) => {
  console.log(error);
};

export const toggleFavorites = (id) => {
  const existingIds = JSON.parse(localStorage.getItem('favoritesIds')) || [];
  const index = existingIds.findIndex((existingId) => existingId === id);

  if (index !== -1) {
    existingIds.splice(index, 1);
  } else if (existingIds.length < 5) {
    existingIds.push(id);
  } else {
    return false;
  }

  localStorage.setItem('favoritesIds', JSON.stringify(existingIds));
  return true;
};

export const removeFromFavorites = (id) => {
  const existingIds = JSON.parse(localStorage.getItem('favoritesIds')) || [];
  const index = existingIds.findIndex((existingId) => existingId === id);
  if (index === -1) {
    return false;
  }
  existingIds.splice(index, 1);
  localStorage.setItem('favoritesIds', JSON.stringify(existingIds));
  return true;
};

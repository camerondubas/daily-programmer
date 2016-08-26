let validateElement = (name, symbol) => name.search(new RegExp(`${symbol[0]}.*${symbol[1]}`, 'i')) !== -1;

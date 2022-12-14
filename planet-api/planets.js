const { v4: uuidv4 } = require('uuid')

module.exports = [
  {
    id: uuidv4(),
    name: 'Mercury',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
    number: 1,
    radius: '2,439.7±1.0 km',
    mass: '3.3011×1023 kg',
  },
  {
    id: uuidv4(),
    name: 'Venus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg',
    number: 2,
    radius: '6,051.8±1.0 km',
    mass: '4.8675×1024 kg',
  },
  {
    id: uuidv4(),
    name: 'Earth',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg',
    number: 3,
    radius: '6371.0 km',
    mass: '5.97237×1024 kg',
  },
  {
    id: uuidv4(),
    name: 'Mars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
    number: 4,
    radius: '3389.5 ± 0.2 km',
    mass: '6.4171×1023 kg',
  },
  {
    id: uuidv4(),
    name: 'Jupiter',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hubble_captures_crisp_new_image_of_Jupiter_and_Europa_%2850354436493%29.jpg',
    number: 5,
    radius: '69,911 km',
    mass: '1.8982×1027 kg',
  },
  {
    id: uuidv4(),
    name: 'Saturn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
    number: 6,
    radius: '58,232 km',
    mass: '5.6834×1026 kg',
  },
  {
    id: uuidv4(),
    name: 'Uranus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg',
    number: 7,
    radius: '25,362±7 km',
    mass: '(8.6810±0.0013)×1025 kg',
  },
  {
    id: uuidv4(),
    name: 'Neptune',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
    number: 8,
    radius: '24 341 ± 30 km',
    mass: '1,02413×1026 kg',
  },
]

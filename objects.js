var playlist = {artist: 'song'};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
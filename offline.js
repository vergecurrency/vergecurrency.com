if (
  typeof window !== 'undefined' && 'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(reg => (
      console.log('Service worker registered')
    ))
    .catch(e => (
      console.error('Error during worker registration: ', e)
    ));
}
if (location.protocol !== 'https:') {
  location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

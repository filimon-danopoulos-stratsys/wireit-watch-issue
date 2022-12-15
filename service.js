console.log('Long running service started.')
setInterval(() => {
  console.log('Service still alive')
}, 30*1000);
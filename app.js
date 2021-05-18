const app = Vue.createApp({

  data() {
    return {
      firstName: 'Clayton',
      lastName: 'Parros',
      email: 'Cp@yahoo.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  }
  
})

app.mount('#app')
//create a vue instance that is allowed because of cdn
const app = Vue.createApp({
  //data will be used on front end
  data() {
    return {
      firstName: 'Clayton',
      lastName: 'Parros',
      email: 'Cp@yahoo.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  //methods can access any data defined above
  methods: {
    getUser() {
      this.firstName = 'Sam'
      this.lastName = 'Smith'
      this.email = 'Sam@yahoo.com'
      this.gender = 'female'
      this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
    }
  }
  
})

//mount above data and methods to div with #app id
app.mount('#app')
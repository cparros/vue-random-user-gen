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
    async getUser() { 
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
        console.log(results)

      this.firstName = results[0].name.firstName
      this.lastName = results[0].name.lastName
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    }
  }
  
})

//mount above data and methods to div with #app id
app.mount('#app')
<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script type="text/javascript">
  // import axios from 'axios';
  export default {
    // data() {
    //   return {
    //     email: ''
    //   }
    // },
    computed: {
      email() {
        return !this.$store.getters.user ? false : this.$store.getters.user.email;
      }
    },
    created() {
      this.$store.dispatch('fetchData');
      // axios.get('https://vuejs-axios-1cc2a.firebaseio.com/users.json')
      // axios.get('/users.json')
      //   .then(res => {
      //     console.log(res)
      //     console.log(typeof res.data)
      //     const data = res.data
      //     const users = []
      //     for(let key in data) {
      //       const user = data[key]
      //       user.id = key
      //       users.push(user)
      //     }
      //     console.log(users)
      //     this.email = users[0].email
      //   })
      //   .catch(error => console.log(error));
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
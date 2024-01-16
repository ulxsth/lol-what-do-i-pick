const app = new Vue({
  el: '#app',
  data: {
    characters: [],
  },
  created() {
    fetch('characters.csv')
      .then((res) => res.text())
      .then((data) => {
        this.characters = Papa.parse(data, { header: true }).data
      })
  },
})

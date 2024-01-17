const app = new Vue({
  el: '#app',
  data: {
    characters: [],
    selected: [],
    selectedLanes: []
  },
  watch: {
    selected: {
      handler: function (newVal) {
        console.log(newVal)
        this.selectLane(newVal[newVal.length - 1]);
      },
      deep: true
    }
  },
  created() {
    fetch('characters.csv')
      .then((res) => res.text())
      .then((data) => {
        this.characters = Papa.parse(data, { header: true }).data
      })
  },
  methods: {
    find(name) {
      character = this.characters.find(character => character.name === name)
      console.log(character)
      return character
    },
    selectLane(name) {
      const character = this.find(name)
      if (!character) {
        console.error('Character not found')
        return
      }

      if (!this.isLaneSelected(character.lane1)) {
        this.selectedLanes.push(character.lane1)
        return
      }

      if (this.lane2 && !this.isLaneSelected(character.lane2)) {
        this.selectedLanes.push(character.lane2)
        return
      }

      if (this.lane3 && !this.isLaneSelected(character.lane3)) {
        this.selectedLanes.push(character.lane3)
        return
      }

      this.selectedLanes.push(character.lane1)
    },
    isLaneSelected(lane) {
      return this.selectedLanes.includes(lane);
    }
  },
})

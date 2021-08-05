new Vue({
  el: "#atm",
  data: {
    logs: [],
    nyuryokugaku: "0",
    zandaka: 0,
  },

  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.nyuryokugaku,
      })
    },
    syukkin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: this.nyuryokugaku,
      })
    },
  },
})

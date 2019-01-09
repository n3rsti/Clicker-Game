const game = new Vue({
    el: "#game",
    data: {
        gain: 1,
        points: 0,
        goal: 30,
        display: "display: none"
    },
    methods: {
        upgrade: function(){
            this.points-= this.goal
            this.gain++  
            this.goal+= this.goal
            if(this.points < this.goal){
                this.display = "display: none"
            }          
        },
        press: function(){
            this.points+= this.gain
            if(this.points > this.goal){
                this.display = "display: block"
            }
            else {
                this.display = "display: none"
            }
        }
    }
});
/*const start = new Vue({
    el: "#start",
    data: {
        position: "left: 0"
    },
    methods: {
        start: function(){
            this.position = ""
        }
    }
}); */
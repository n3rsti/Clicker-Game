const game = new Vue({
    el: "#game",
    data: {
        gain: 1,
        points: 0,
        goal: 30,
        total: 0,
        upgrade: [
            2,
            5,
            10
        ],
        upgradePrice: [
            30,
            50,
            80
        ],
        
    },
    methods: {
        upgradeF: function(x){
            if(this.points >= this.upgradePrice[x]){
                this.gain += this.upgrade[x]
                this.points -= this.upgradePrice[x]
                this.upgradePrice[x] *= 1.3

            }
            else {
                alert("Nie masz wystarczająco dużo monet")
            }
                       
        },            
        press: function(){
            this.points+= this.gain
            this.total+= this.gain
        }
    }
});
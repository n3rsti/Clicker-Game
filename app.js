const game = new Vue({
    el: "#game",
    data: {
        gain: 1,
        points: 0,
        goal: 30,
        total: 0,
        upgrade: [
            1,
            2,
            3
        ],
        upgradePrice: [
            10,
            20,
            50
        ],
        
    },
    methods: {
        upgradeF: function(x){
            if(this.points >= this.upgradePrice[x]){
                this.gain += this.upgrade[x]
                this.points -= this.upgradePrice[x]
                this.upgradePrice[x] *= 1.5

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
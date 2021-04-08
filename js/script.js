function initVue(){

    new Vue ({

        el: '#app',

        data: {
            images: [
                'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
                'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
                'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
                'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
            ],

            'index': 0,
        },

        methods: {

            prevImg: function(){

                this.index--;

                if (this.index == -1){
                    this.index = this.images.length - 1
                };
                
            },

            nextImg: function(){

                this.index++;

                if (this.index >= this.images.length){
                    
                    this.index = 0;
                };

            }
        },

        mounted: function() {

            setInterval(() => {
                this.nextImg()
            }, 3000)
        }
    })
}

function init (){

    initVue();
};

$(init)

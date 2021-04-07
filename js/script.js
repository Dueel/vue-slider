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

            dots: [
                'active',
                'none',
                'none',
                'none',
            ],

            'index': 0,
        },

        methods: {

            prevImg: function(){

                this.index -= 1;

                if (this.index == -1){
                    this.index = 3
                }
                
                this.dots[this.index] = 'active';
                this.dots[this.index + 1] = 'none';

                if (this.index == 3){

                    this.dots[0] = 'none'
                }
            },

            nextImg: function(){

                this.index += 1;

                if (this.index == 4){
                    
                    this.index = 0;
                };

                this.dots[this.index] = 'active';
                this.dots[this.index - 1] = 'none';

                if (this.index == 0){

                    this.dots[3] = 'none'
                }

            }
        }
    })
}

function init (){

    initVue();
};

$(init)

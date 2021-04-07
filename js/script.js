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

            'num': 0
        },

        methods: {

            prevImg: function(){
                console.log('prev', this.num);
                this.num -= 1;

                if (this.num == -1){
                    this.num = 3
                }
            },

            nextImg: function(){
                this.num += 1;

                if (this.num == 4){
                    this.num = 0
                }
            }
        }
    })
}

function init (){

    initVue();
};

$(init)

// 'img01': 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
// 'img02': 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
// 'img03': 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
// 'img04': 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
// 'num': '01'
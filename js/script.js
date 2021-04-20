var app = new Vue({
    el: '#root',
    data: {
        currentImg: 0,
        carouselImages: [
            'img/campagna.jpg',
            'img/cascate.webp',
            'img/montagne.webp',
            'img/fiori.jpeg'
        ]
    },
    methods: {
        nextPhoto() {
            const nextImageIndex = this.currentImg +1;

            if ( nextImageIndex > this.carouselImages.length -1 ) {
                this.currentImg = 0;
            } else {
                this.currentImg = nextImageIndex;
            }
        },
        prevPhoto() {
            const prevImageIndex = this.currentImg -1;

            if ( prevImageIndex < 0 ) {
                this.currentImg = this.carouselImages.length -1;
            } else {
                this.currentImg = prevImageIndex;
            }
        }
    }
})
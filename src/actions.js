
//Actions
export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const RESTORE = 'RESTORE';
//action creators
export function like(id){
    return{ type: LIKE, id}
}
export function dislike(id){
    return{ type: DISLIKE, id }
}
export function restore(){
    return {type: RESTORE}
}
//initial state
export const initialState = [{
        name: "John",
        age: "25",
        description: "Skater",
        imgurl: "http://cdni.condenast.co.uk/385x385/a_c/alistair-taylor-young-instagram-conde-nast-traveller-11march15-instagram_385x385.jpg",
        likes: 0,
        dislikes: 0,
        id: 1,
    style:{
            transform: 'translateX(0px)'
    }
    }, {
        name: "A Cat",
        age: "meow",
        description: "meow",
        imgurl: "https://vettechcheck.files.wordpress.com/2012/07/kittytoilet.jpg?w=470",
        likes: 0,
        dislikes: 0,
        id: 2,
    style:{
            transform: 'translateX(0px)'
    }
    },
        {
            name: "Rick",
            age: "70+",
            description: "scientist",
            imgurl: "https://pbs.twimg.com/profile_images/521129620783894528/SIQEsGul.png",
            likes: 0,
            dislikes: 0,
            id: 3,
            style:{
                transform: 'translateX(0px)'
            }
        },
        {
            name: "Jason",
            age: "40+",
            description: "icon",
            imgurl: "https://i.pinimg.com/736x/07/1c/c1/071cc1968b95d071921a2941809168b5--jason-isaacs-diana-gabaldon.jpg",
            likes: 0,
            dislikes: 0,
            id: 4,
            style:{
                transform: 'translateX(0px)'
            }
        },
        {
            name: "Alice",
            age: "18",
            description: "zombie killer",
            imgurl: "https://i2.wp.com/www.robvegas.de/wp-content/uploads/2017/01/%C2%A9-Constantin-Film-Verleih-GmbH.jpg?w=356&h=356&crop=1",
            likes: 0,
            dislikes: 0,
            id: 5,
            style:{
                transform: 'translateX(0px)'
            }
        }
    ];




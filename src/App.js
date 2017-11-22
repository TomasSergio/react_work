import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import {Icon} from 'react-fa';
import {store, Cards} from './index';
import {restore} from "./actions";


class App extends Component {
    constructor() {
        super();
        this._idx = 0;
        this.state = Cards[this._idx];
        this.style = Cards[this._idx].style;
        this.unsubscribe = null;
        this.likes = Cards[this._idx].likes;
        this.dislikes = Cards[this._idx].dislikes;
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            if (this.style.transform === 'translateX(0px)' && store.getState()[this._idx].style.transform !== 'translateX(0px)') {
                this.style = store.getState()[this._idx].style;
                setTimeout(() => store.dispatch(restore()), 450);
                this.forceUpdate();
            } else {
                this._idx = this.getRandomIdx();
                this.state = store.getState()[this._idx];
                this.forceUpdate();
                setTimeout(()=>{
                    this.style = store.getState()[this._idx].style;
                    this.forceUpdate();
                }, 200);
            }
        })
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    getRandomIdx() {
        let random = Math.floor(Math.random() * store.getState().length);
        return random !== this._idx ? random
            : random  > 0 ? random -1
            : random + 1;
    }


    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <Icon name="cog" size="2x" />
                    <h2>tinder</h2>
                    <Icon name="comments" size="2x" />
                </div>
                <div className="swiper-container">
                    <Card
                        imgurl={this.state.imgurl}
                        name={this.state.name} age={this.state.age}
                        description={this.state.description}
                        id={this.state.id}
                        style={this.style}
                        likes={this.state.likes}
                        dislikes={this.state.dislikes}
                    />
                </div>
                <div className="app-options">
                    <div className="button btn-refresh">
                        <Icon name="refresh" size="lg"/>
                    </div>
                    <div className="button btn-dislike">
                        <Icon name="times" size="3x"/>
                    </div>
                    <div className="button btn-like">
                        <Icon name="heart" size="3x"/>
                    </div>
                    <div className="button btn-fav">
                        <Icon name="star" size="lg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;



// if(this.likes < store.getState()[this._idx].likes){
//     console.log(this.likes, store.getState()[this._idx].likes)
//     this.style = {
//         transform: 'translateX(-500px)',
//         opacity: 0,
//         transition: 'all ease-out 500ms'
//     };
//     this.forceUpdate();
//     setTimeout(() => {
//         this._idx = this.getRandomIdx();
//         this.state = store.getState()[this._idx];
//         this.likes = store.getState()[this._idx].likes;
//         this.forceUpdate();
//     }, 300)
//     setTimeout(()=>{
//         this.style= {transform: 'translateX(0px)'};
//
//         this.forceUpdate();
//     }, 500);
// }
// if( this.dislikes < store.getState()[this._idx].dislikes){
//     console.log(this.dislikes, store.getState()[this._idx].dislikes)
//     this.style = {
//         transform: 'translateX(500px)',
//         opacity: 0,
//         transition: 'all ease-out 500ms'
//     };
//     this.forceUpdate();
//     setTimeout(() => {
//         this._idx = this.getRandomIdx();
//         this.state = store.getState()[this._idx];
//         this.dislikes = store.getState()[this._idx].dislikes;
//         this.forceUpdate();
//     }, 300)
//     setTimeout(()=>{
//         this.style= {transform: 'translateX(0px)'};
//
//         this.forceUpdate();
//     }, 500);
// }
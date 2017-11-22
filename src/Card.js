import React, { Component } from 'react';
import './Card.css';
import Swipe from 'react-swipe-component';
import {store} from './index';
import {like, dislike} from './actions';
import {Icon} from 'react-fa';

class Card extends Component{
    constructor(){
        super();
        this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
        this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    }

    render() {
        //eslint-disable-next-line
        const { imgurl, name, age, description, id, style, likes, dislikes} = this.props;
        return (
            <Swipe
                nodeName="div"
                className="card"
                data-id={id}
                mouseSwipe={true}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener}
                style={style}>
                <img src={imgurl} alt={name} />
                <span className="card__main-info">{name}, {age}</span>
                <span className="card__description">{description}</span>
                <div className="card__likes">
                    <Icon name="thumbs-o-up" size="lg"/> {likes}
                    <Icon name="thumbs-o-down" size="lg"/> {dislikes}
                </div>

            </Swipe>
        );
    }
    _onSwipeLeftListener(){
        store.dispatch(like(Number(this.props.id)));
    }
    _onSwipeRightListener(){
        store.dispatch(dislike(Number(this.props.id)));
    }
}

export default Card

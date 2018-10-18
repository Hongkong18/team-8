import React, {Component} from 'react';

import StarRatings from 'react-star-ratings';
 


export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {rating: 0};
    }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
        let rating = this.state.rating;
      // rating = 2;
      return (
          <div>
              <textarea placeholder="How did you feel before visiting the doctor" style={{"margin-bottom":"40px", "border":"1px solid #000000", "border-radius":"5px", "padding":"5px", "width":"500px", "height": "300px"}}></textarea> <br />
              <textarea placeholder="How did you feel after visiting the doctor" style={{"border":"1px solid #000000", "border-radius":"5px", "padding":"5px", "width":"500px", "height": "300px"}}></textarea> <br />
              
        Rate this Doctor 
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={this.changeRating.bind(this)}
          numberOfStars={5}
          name='rating'
        />
        </div>
      );
    }
}
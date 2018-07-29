import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishSummary extends Component {

    render() {    
        var dish = this.props.dish;

        if(dish != null) {
            const card = (
                <div key="card" className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle >{dish.name}</CardTitle>
                            <CardText >{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>);
            var commentsContainter = null;
            if(dish != null && dish.comments != null){
                var comments = dish.comments.map((comment) => {
                    return (
                        <div key= {comment.id}>
                            <div>{comment.author}:</div>
                            <div><i>{comment.text}</i></div>
                        </div>);
                });
                commentsContainter = 
                    (<div key="comments" className="col-12 col-md-5 m-1"><b>Comments:</b><br/>{comments}</div>);
            }

            return [card, commentsContainter];
        }
        else{
            return(<div></div>);
        }
    }
}

export default DishSummary;
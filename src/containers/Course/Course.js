import React, { Component } from 'react';

class Course extends Component {
    
    state = {
        courseTitle: ''
    }

    componentDidMount(){
        this.parseQueryParams();
    }

    componentDidUpdate(){
        this.parseQueryParams();
    }

    parseQueryParams(){
        console.log(this.props)

        //looks for existence of string "search" object
        const query = new URLSearchParams(this.props.location.search);
        // turning the object query into an array to be able to loop through
        for (let param of query.entries()){
            
            //the question mark in "?title" is largely ignored 
            // OUTPUT: Array [ "title", "Vue - The Complete Guide" ]
            console.log(param);

            if(this.state.courseTitle !== param[1]){
                this.setState({
                    courseTitle: param[1]
                })
            }

        }

        console.log(query);
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;
/**
 * Created by Sohail and Immanuel on 6/9/2017.
 */
import React from 'react';

class BadgeClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <div className="card">
                <h2 className="title">Class</h2>
                <form className="card-content" >
                    
                    <ul>
                        <li>CS100</li>
                        <li>CS113</li>
                        <li>CS252</li>
                        <li>CS332</li>
                        <li>CS490</li>
                    </ul>

                </form>
            </div>
        );
    }
}


export default BadgeClass;
import React, {Component} from 'react'
import axios from "axios"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Movies: []
        };
    }
    getUsersData() {
        axios
        .get('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
            .then(response => {
                responseData = JSON.parse(respnse.data);
                let movieArray = [];
                response.Data.map((movie) => {
                  movieArray.push(movies);
                });
                    <div>
                    <p>{movies.id}</p>
                    <p>{movies.title}</p>
                    </div>
            )

                    this.setState({
                        movies
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
                {this.state.movies}
            </div>
        )
    }
}



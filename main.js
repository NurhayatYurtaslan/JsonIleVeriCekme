const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
    // const readyState = "interactive";
    const readyState = "complete";

    if (document.readyState == readyState) {
        // when document ready add lass to fadeout loader
        loaderEl.classList.add('fullpage-loader--invisible');

        // when loader is invisible remove it from the DOM
        setTimeout(() => {
            loaderEl.parentNode.removeChild(loaderEl);
        }, 2000)
    }
});


import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
        constructor() {
            super();
            this.state = {
                items: [],
                error: ""
            }
        }

        componentDidMount() {
            var items = this.state.items;
            axios.get('https://jsonplaceholder.typicode.com/users/?format=json')
                .then(response => {
                        if (this.unmounted) return;
                        this.setState({ items: response.data });
                        console.log(response);
                    },
                    (error) => {
                        let failedRequest = "Error: fetching API data was not successful";
                        this.setState({ error: failedRequest });
                        console.log(error);
                    }
                )
        }

        componentWillUnmount() {
            this.unmounted = true;
        }


        render() {
                var items = this.state.items;
                var symb = ":"
                return ( < div > {
                            items.map(item =>
                                <
                                ul key = { item.username } >
                                <
                                li > { item.username + symb + item.name } < /li>

                                <
                                /ul>
                            )
                        } <
                        p id = "error" > { this.state.error } < /p> < /
                        div >
                    ) //return
            } //render
    } //component

ReactDOM.render( < App / > , document.getElementById('main'));
import React from "react";
import '../Style/frontPage.css';    // importing the CSS

class Homepage extends React.Component{
    render(){
        return(
            <div>
                {/* <!--Banner Part (upper part)--> */}

                <div class="bg-cover bg-image d-flex">
                    <div class="container mt-3">
                        <div class="row">
                            <div class="col text-end">
                                <button type="button" class="btn btn-outline-light">Login</button>
                                <button type="button" class="btn btn-outline-light">Create an account</button>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col d-flex justify-content-center">
                                <div class="text-danger circle">
                                    <h2 class="logo">e!</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col d-flex justify-content-center">
                                <h3 class="text-light line">Find the best restaurants, cafés, and bars</h3>
                            </div>
                        </div>
                        <div class="row mt-3 d-flex justify-content-center">
                            <div class="col selectbar">
                                <select class="form-control input1 py-2">
                                    <option value="0" disabled selected>Please type a location</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Bangalore">Bangalore</option>
                                </select>
                            </div>
                            <div class="col input-group searchbar">
                                <i class="input-group-text bi bi-search input2"></i>
                                <input type="text" class="form-control input2 py-2" placeholder="Search for restaurants" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Quick Searches Part (lower)--> */}

                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div>
                            <h3 class="heading">Quick Searches</h3>
                            <p class="subheading">Discover restaurants by type of meal</p>
                        </div>
                    </div>

                    {/* <!--First Line--> */}
                    <div class="d-flex flex-wrap">

                        {/* <!--Breakfast--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/1.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Breakfast</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>
                        
                        {/* <!--Lunch--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/2.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Lunch</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>

                        {/* <!--Snacks--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/3.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Snacks</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>

                        {/* <!--Dinner--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/4.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Dinner</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>
                        
                        {/* <!--Drinks--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/5.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Drinks</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>

                        {/* <!--Nightlife--> */}
                        <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}}>
                            <div class="l-box">
                                <img src="./images/6.png" class="img-fluid img-qs" />
                            </div>
                            <div class="r-box">
                                <h4 class="card-title">Nightlife</h4>
                                <p class="card-content">Start your day with exclusive breakfast options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
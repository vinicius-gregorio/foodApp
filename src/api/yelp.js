import axios from 'axios';


// const apiKey = process.env.REACT_APP_YELP_API_KEY;
//const yelpApiKey = apiKey;

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nQi0E2ryTB3MN6i-dx5BLp69VroJCmb7kD3QWtL02tQ_oL90l_bIqItp3mYudecxB8oyeiOOmiQx824oEKLhV27ZjMpX_3pfu-F1SCAcJ_KoOOOdI6qV_qVB3f1WXXYx',
    }
});
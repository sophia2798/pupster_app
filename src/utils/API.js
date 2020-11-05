import axios from "axios";

export default {
    getDogBreed: function(breed) {
        return axios.get(`https://dog.ceo/api/breed${breed}/images`);
    },
    getBreedList: function() {
        return axios.get(`https://dog.ceo/api/breeds/list`);
    },
    getRandomDog: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    }
};
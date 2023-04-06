import axios from 'axios';
export class MovieServices {
    static serverURL = `http://localhost:9000`;

    // static getGroups(){
    //     let dataURL = `${this.serverURL}/groups`;
    //     return axios.get(dataURL);
    // }


    // static getGroup(albam){
    //     let groupId  = albam.groupId;
    //     let dataURL = `${this.serverURL}/groups/${groupId}`;
    //     return axios.get(dataURL);
    // }

    static getAllMovies(){
        let dataURL = `${this.serverURL}/albams`;
        return axios.get(dataURL)

    }

    static getAlbms(albamId){
        let dataURL = `${this.serverURL}/albams/${albamId}`;
        return axios.get(dataURL);
    }

    static createAlbams(albam){
        let dataURL = `${this.serverURL}/albams`;
        return axios.post(dataURL, albam);
    }

    static updateAlbam(albam, contactId){
        let dataURL = `${this.serverURL}/albams/${contactId}`;
        return axios.put(dataURL, albam)
    }


    static deleteAlbam(contactId){
        let dataURL = `${this.serverURL}/albams/${contactId}`;
        return axios.delete(dataURL);
    }

}   

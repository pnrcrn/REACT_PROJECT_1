
import axios from "axios";

const KEY='AIzaSyC3Bol7Xn3NAfsv94lD_KGi8RDFT9sppQw';


export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    type: 'video',
    maxResults:5,
    key:KEY,
    // q: 'surfboards'

}
});
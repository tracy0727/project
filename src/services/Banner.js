const API='/api/banner.json';
function get(){
    return fetch(API).then(p =>p.json())
}
export default {get};
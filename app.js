import axios from "axios";

const getData = async (idNumber)=>{
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${idNumber}`)
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${idNumber}`);
    console.log(user,post);
}

export {getData};
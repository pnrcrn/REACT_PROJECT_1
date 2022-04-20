import axios from "axios";

export const unsplash=axios.create({
baseURL:"https://api.unsplash.com",
headers: {
    Authorization: 'Client-ID cFkqNDY95GgdkTQ-cW5BcfwFsAdF4fN9wjJ9GXZ5Csg'
  }


})
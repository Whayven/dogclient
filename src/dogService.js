import axios from "axios";

const url = "http://dog-balancer-291881508.us-east-1.elb.amazonaws.com/dogs";
// const url = "http://localhost:5000/dogs";

class dogService {
  static getDogs() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}`);
        const data = res.data;
        resolve(
          data.map(dog => ({
            ...dog
          }))
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  static getSelectDogs() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/candidates`);
        const data = res.data;
        resolve(
          data.map(dog => ({
            ...dog
          }))
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  static updateDog(id) {
    return axios.put(`${url}/${id}`);
  }
}

export default dogService;

import axios from "axios";

const url = "http://ec2-54-221-1-157.compute-1.amazonaws.com/dogs";

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

  static updateDog(id) {
    return axios.put(`${url}/${id}`);
  }
}

export default dogService;


import axios from 'axios';

export async function fetchWords(number) {
    try {
      const response = await axios.get(
        "/api/words?input=" + number
      );
      const { words } = response.data;
      return words;
    } catch (err) {
      console.log(err);
      return "";
    }
};
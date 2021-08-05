import { ReadStream } from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';

export const uploadToBucket = async (stream: ReadStream) => {
  try {
    const form = new FormData();
    form.append('ppic', stream, 'ppic.jpg');
    const { data } = await axios.post('https://telegra.ph/upload', form, {
      headers: form.getHeaders(),
    });
    return `https://telegra.ph${data[0].src}`;
  } catch (e) {
    console.error(e);
  }
};

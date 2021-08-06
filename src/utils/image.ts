import { ReadStream } from 'fs';
import FormData = require('form-data');
import axios from 'axios';

export const uploadToBucket = async (
  stream: ReadStream,
  bucketHost: string
) => {
  try {
    const form = new FormData();
    form.append('ppic', stream, 'ppic.jpg');
    const { data } = await axios.post(`${bucketHost}/upload`, form, {
      headers: form.getHeaders(),
    });
    return `${bucketHost}${data[0].src}`;
  } catch (e) {
    console.error(e);
  }
};

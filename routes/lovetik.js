// Created By SatganzDevs 
// Copyright (c) SatganzDevs
// Do Not Change!

import axios from 'axios';
import FormData from 'form-data';
import cheerio from 'cheerio';




export const loveTik = async(url) => {
  try {
    const formData = new FormData();
    formData.append('query', url);

    const response = await axios.post('https://lovetik.com/api/ajax/search', formData, {
      headers: formData.getHeaders()
    });

    const video = response.data.links[0].a;
    const audio = response.data.links[2].a;

    return {
      status: 'ok',
      developer: "SatganzDevs",
      type: 'video',
      cover: response.data.cover,
      desc: response.data.desc,
      author: {
        username: response.data.author,
        name: response.data.author_name,
        avatar: response.data.author_a
      },
      video,
      audio
    };

  } catch (error) {
    console.error('Error scraping from lovetik:', error);

    try {
      const fallbackUrl = `https://dlpanda.com/id?url=${url}&token=G7eRpMaa`;
      const response = await axios.get(fallbackUrl);
      const html = response.data;
      const $ = cheerio.load(html);

      let imgSrc = [];
      $("div.col-md-12 > img").each((index, element) => {
        imgSrc.push($(element).attr("src"));
      });

      return {
        status: 'error',
        developer: "SatganzDevs",
        type: 'image',
        fallback: {
          creator: "SatzzDev.",
          images: imgSrc
        }
      };
    } catch (fallbackError) {
      console.error('Error scraping from dlpanda:', fallbackError);
      return {
        status: 'error',
        developer: "SatganzDevs",
        message: 'Both lovetik and dlpanda scraping failed.'
      };
    }
  }
}

const express = require('express');
const redis = require('redis');
const axios = require('axios');

const app = express();
app.use(express.json());

const client = redis.createClient();

const redisHandler = (key, cb) => {
      return new Promise((resolve, reject) => {
            client.get(key, async (err, data) => {
                  if (err) return reject(err);
                  if (data !== null) return resolve(JSON.parse(data));
                  const dataToSetRedis = await cb();
                  client.setex(key, 3600, JSON.stringify(dataToSetRedis));
                  resolve(dataToSetRedis);
            });
      });
};

app.get('/photos', async (req, res) => {
      const albumId = req.query.albumId;
      const photos = await redisHandler(`photos:album:${albumId}`, async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos", { params: { albumId } });
            return data;
      });

      res.send(photos);
});

app.get('/photos/:id', async (req, res) => {
      const photo = await redisHandler(`photos:${req.params.id}`, async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`);
            return data;
      });

      res.send(photo);
});

app.listen(3000, () => {
      console.log('Server is running on port 3000');
});
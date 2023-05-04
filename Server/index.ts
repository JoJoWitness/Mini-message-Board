import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const helmet = require('helmet')

mongoose.connect(String(process.env.MONGODB__URL)).then(() => {
  console.log(`Listening on port: ${PORT}`);
  app.listen(PORT);
})
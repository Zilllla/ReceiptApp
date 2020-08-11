const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    ing1: {
      name: String,
      amount: Number,
      unit: String
    },
    ing2: {
      name: String,
      amount: Number,
      unit: String
    },
    ing3: {
      name: String,
      amount: Number,
      unit: String
    },
    ing4: {
      name: String,
      amount: Number,
      unit: String
    },
    ing5: {
      name: String,
      amount: Number,
      unit: String
    },
    ing6: {
      name: String,
      amount: Number,
      unit: String
    },
    ing7: {
      name: String,
      amount: Number,
      unit: String
    },
    ing8: {
      name: String,
      amount: Number,
      unit: String
    },
    ing9: {
      name: String,
      amount: Number,
      unit: String
    },
    ing10: {
      name: String,
      amount: Number,
      unit: String
    },
    ing11: {
      name: String,
      amount: Number,
      unit: String
    },
    ing12: {
      name: String,
      amount: Number,
      unit: String
    },
    ing13: {
      name: String,
      amount: Number,
      unit: String
    },
    ing14: {
      name: String,
      amount: Number,
      unit: String
    },
    ing15: {
      name: String,
      amount: Number,
      unit: String
    },
    ing16: {
      name: String,
      amount: Number,
      unit: String
    },
    ing17: {
      name: String,
      amount: Number,
      unit: String
    },
    ing18: {
      name: String,
      amount: Number,
      unit: String
    },
    ing19: {
      name: String,
      amount: Number,
      unit: String
    },
    ing20: {
      name: String,
      amount: Number,
      unit: String
    }
  },
  instructions: {
    type: String, required: true
  },
  images: {
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  img5: String
}
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

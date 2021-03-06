module.exports = {
  featureObj: {
    type: String,
    required: true,
  },

  descriptionObj: {
    type: String,
    required: true,
  },

  productNameObj: {
    type: String,
    required: true,
    trim: true,
  },

  categoryObj: {
    type: String,
    required: true,
    trim: true,
  },

  styleObject: {
    type: String,
    required: true,
  },

  colorObject: {
    type: String,
    default: '',
    required: true,
  },

  priceObject: {
    type: Number,
    required: true,
  },
  discountObject: {
    type: Number,
    required: true,
  },
}

export default function idPlugin (schema, options) {
  schema.set('toJSON', {
    virtuals: true,
    versionKey: false
  });
  schema.options.toJSON.transform = function (doc, ret, options) {
    delete ret._id;
    return ret;
  }
}

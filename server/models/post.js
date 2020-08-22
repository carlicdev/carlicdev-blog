const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;
const slugify = require('slugify');

const postSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    content: { type: String, required: true },
    tags: { type: Array}
});

postSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true });
    }
    next();
});

module.exports = model('Post', postSchema);
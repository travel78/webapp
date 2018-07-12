import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    subgroups: [{
        type: String
    }]
});

export default mongoose.model('Group', GroupSchema);
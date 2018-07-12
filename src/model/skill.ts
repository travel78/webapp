import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    group: {
        type: String
    },
    subgroup: {
        type: String
    },
    subscription: {
        type: String
    },
    levels: [{
        type: String
    }]
});

export default mongoose.model('Skill', SkillSchema);
module.exports = mongoose=>{
    const Todo = mongoose.model(
        "todo",
        mongoose.Schema({
            title: String,
            completed: {type: Boolean, default:false},
        },
        {timestamps: true}
        )
    )
    return Todo;
}
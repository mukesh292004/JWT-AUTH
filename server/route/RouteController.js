const Workout = require('./../model/workoutmodel');

const getall = async (req, res) => {
    try {
        const user_id = req.user._id;
        const workouts = await Workout.find({user_id}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getid = async (req, res) => {
    try {
        
        const { id } = req.params;
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postit = async (req, res) => {
    try {
        const { title, rep, load } = req.body;
        const user_id = req.user._id;
        const newWorkout = await Workout.create({ title, rep, load ,user_id});
        res.status(200).json({ workout: newWorkout });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteit = async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout.findByIdAndDelete(id);
        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true });
        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getall, getid, postit, deleteit, update };

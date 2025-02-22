const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        bids: [{ lawyerId: mongoose.Schema.Types.ObjectId, price: Number }], 
        status: { type: String, enum: ["open", "in-progress", "closed"], default: "open" },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);

const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
    {
        firmName: { type: String, required: true }, // Name of the law firm
        lawyerName: { type: String, required: true }, // Name of the lawyer
        email: { type: String, required: true, unique: true }, // Unique email for authentication
        password: { type: String, required: true }, // Encrypted password (hashed)
        phone: { type: String, required: true }, // Contact number
        specialization: [{ type: String, required: true }], // Areas of law (e.g., Criminal, Corporate, Family)
        experience: { type: Number, required: true }, // Years of experience
        introVideo: { type: String }, // URL to introduction video
        profileImage: { type: String }, // URL to profile picture
        address: {
            street: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            zipCode: { type: String },
        },
        rating: { type: Number, default: 0 }, // Average client rating
        reviews: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
                comment: { type: String },
                rating: { type: Number },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        caseHistory: [
            {
                caseId: { type: mongoose.Schema.Types.ObjectId, ref: "Case" }, // Reference to cases
                clientName: { type: String },
                caseType: { type: String },
                caseStatus: { type: String, enum: ["Won", "Lost", "Pending"] },
                verdictDate: { type: Date },
            },
        ],
        bids: [
            {
                queryId: { type: mongoose.Schema.Types.ObjectId, ref: "Query" }, // Case query
                price: { type: Number, required: true }, // Lawyer's bid price
                status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        documents: [
            {
                name: { type: String },
                fileUrl: { type: String }, // URL to stored documents
                uploadedAt: { type: Date, default: Date.now },
            },
        ],
        earnings: { type: Number, default: 0 }, // Total earnings from cases
        isVerified: { type: Boolean, default: false }, // Verification status
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Lawyer", lawyerSchema);

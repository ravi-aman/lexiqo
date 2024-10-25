// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define interface for the User document
export interface IUser extends Document {
    username: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    role: string;
    profilePicture?: string;
    tokens: string[];
    verifyCode?: string;        // Field for storing verification code
    verifyCodeExpiry?: Date;    // Field for storing code expiry time
    isMessageAccepted: boolean; // Field to track message acceptance
    message?: string;           // Field to store messages or notes for the user
    createdAt: Date;
    updatedAt: Date;
    comparePassword(enteredPassword: string): Promise<boolean>;
}

// Define the User schema
const UserSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please provide a username'],
            unique: true,
            trim: true,
            lowercase: true,
            minlength: [3, 'Username must be at least 3 characters'],
            maxlength: [30, 'Username cannot be more than 30 characters'],
            match: [
                /^[a-zA-Z0-9_.-]*$/,
                'Username can only contain letters, numbers, underscores, periods, and dashes',
            ],
        },
        name: {
            type: String,
            required: [true, 'Please provide your full name'],
            trim: true,
            maxlength: [50, 'Name cannot be more than 50 characters'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email',
            ],
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 6,
            select: false, // Ensure password is not returned in queries
        },
        phoneNumber: {
            type: String,
            required: [true, 'Please provide a phone number'],
            unique: true,
            match: [/^\+?[1-9]\d{1,14}$/, 'Please provide a valid phone number'], // Regex for E.164 phone format
        },
        isEmailVerified: {
            type: Boolean,
            default: false, // Initially, the email is not verified
        },
        isPhoneVerified: {
            type: Boolean,
            default: false, // Initially, the phone is not verified
        },
        role: {
            type: String,
            enum: ['user', 'law-firm', 'admin'], // Three possible roles
            default: 'user',
        },
        profilePicture: {
            type: String, // URL or path to the user's profile picture
            default: '',  // Optional field, can be empty
        },
        tokens: {
            type: [String], // Array to store authentication tokens (e.g., JWT, refresh tokens)
            default: [],
        },
        verifyCode: {
            type: String, // Store the verification code sent to email/phone
            default: '',
        },
        verifyCodeExpiry: {
            type: Date, // Expiry date/time for the verification code
        },
        isMessageAccepted: {
            type: Boolean, // Track if the user has accepted to receive messages (promotional or others)
            default: false,
        },
        message: {
            type: String, // Any additional message or note for the user
            default: '',
        },
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Middleware to hash password before saving a user
UserSchema.pre('save', async function (next) {
    const user = this as IUser;
    if (!user.isModified('password')) return next(); // Only hash if password is new/modified

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
});

// Method to compare passwords during login
UserSchema.methods.comparePassword = async function (
    enteredPassword: string
): Promise<boolean> {
    return bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;

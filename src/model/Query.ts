import mongoose, { Document, Schema } from 'mongoose';

// Interface representing the structure of the EnhancedLegalQuery
interface EnhancedLegalQuery extends Document {
    user?: {
        fullName?: string;
        email?: string;
        phoneNumber?: string;
        location?: string;
        preferredContactMethod?: 'email' | 'phone' | string;
        preferredLanguage?: string;
        accessibilityNeeds?: string;
    };
    legalIssue?: {
        type?: string;
        description?: string;
        urgencyLevel?: 'urgent' | 'high' | 'normal' | 'low';
        jurisdiction?: string;
        relevantLaws?: string[];
        specificCaseType?: string;
    };
    backgroundInfo?: {
        caseHistory?: string;
        previousConsultations?: string;
        referralSource?: string;
        documents?: string[]; // Assuming documents are stored as paths or URLs
    };
    desiredOutcome?: {
        seeking?: string;
        budgetConstraints?: number;
        paymentMethod?: string;
        expectations?: string;
        desiredTimeline?: string;
    };
    additionalContext?: {
        involvedParties?: { name: string; role: string }[]; // Array of involved parties
        timeline?: string;
        priorRepresentation?: string;
        evidenceCollection?: string;
        witnessInformation?: { name: string; contact: string }[];
        conflictOfInterest?: string;
    };
    confidentialityAgreement?: boolean;
    feedbackMechanism?: boolean;
    tokenUsage?: {
        tokensUsed?: number;
    };
}

// Define the schema
const EnhancedLegalQuerySchema: Schema = new Schema({
    user: {
        fullName: { type: String, required: false },
        email: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        location: { type: String, required: false },
        preferredContactMethod: { type: String, enum: ['email', 'phone'], required: false },
        preferredLanguage: { type: String, required: false },
        accessibilityNeeds: { type: String, required: false },
    },
    legalIssue: {
        type: { type: String, required: false },
        description: { type: String, required: false },
        urgencyLevel: { type: String, enum: ['urgent', 'high', 'normal', 'low'], required: false },
        jurisdiction: { type: String, required: false },
        relevantLaws: { type: [String], required: false },
        specificCaseType: { type: String, required: false },
    },
    backgroundInfo: {
        caseHistory: { type: String, required: false },
        previousConsultations: { type: String, required: false },
        referralSource: { type: String, required: false },
        documents: { type: [String], required: false }, // Paths or URLs of documents
    },
    desiredOutcome: {
        seeking: { type: String, required: false },
        budgetConstraints: { type: Number, required: false },
        paymentMethod: { type: String, required: false },
        expectations: { type: String, required: false },
        desiredTimeline: { type: String, required: false },
    },
    additionalContext: {
        involvedParties: { type: [{ name: String, role: String }], required: false }, // Array of objects
        timeline: { type: String, required: false },
        priorRepresentation: { type: String, required: false },
        evidenceCollection: { type: String, required: false },
        witnessInformation: { type: [{ name: String, contact: String }], required: false }, // Array of objects
        conflictOfInterest: { type: String, required: false },
    },
    confidentialityAgreement: { type: Boolean, required: false },
    feedbackMechanism: { type: Boolean, required: false },
    tokenUsage: {
        tokensUsed: { type: Number, required: false },
    },
});

// Create the model
const LegalQuery = mongoose.model<EnhancedLegalQuery>('LegalQuery', EnhancedLegalQuerySchema);

// Export the model
export default LegalQuery;

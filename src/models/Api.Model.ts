import { Schema, model, Document } from 'mongoose';

interface IApiKey extends Document {
  key: string;
  isBlocked: boolean;
  createdAt: Date;
  lastUsedAt?: Date;
  keepAliveAt?: Date;
}

const apiKeySchema = new Schema<IApiKey>({
  key: { type: String, required: true, unique: true },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  lastUsedAt: { type: Date },
  keepAliveAt: { type: Date },
});

const ApiKey = model<IApiKey>('ApiKey', apiKeySchema);

export default ApiKey;

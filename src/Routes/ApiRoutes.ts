import express from 'express';
import { createKey} from '../Controllers/CreateApiKey';
import { GetApiKey } from '../Controllers/GetApiKey';
import { GetKeyInformation } from '../Controllers/KeyInformation';
import { Unblockey } from '../Controllers/UnBlockKey';
import { DeleteKey } from '../Controllers/DeleteApiKey';
import { KeepAliveKey } from '../Controllers/KeepAliveKey';

const router = express.Router();

router.post("/keys", createKey);
router.get("/keys",GetApiKey);
router.head("/keys/:id",GetKeyInformation);
router.delete("/keys/:id",DeleteKey);
router.put("/keys/:id",Unblockey);
router.put("/keepalive/:id",KeepAliveKey);

export default router; 

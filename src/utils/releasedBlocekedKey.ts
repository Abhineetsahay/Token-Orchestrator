import ApiKey from "../models/Api.Model";

const releaseBlockedKeys = async () => {
  const now = new Date();
  console.log("S");
  
  const keysToRelease = await ApiKey.find({
    isBlocked: true,
    keepAliveAt: { $lte: new Date(now.getTime() - 60 * 1000) },
  });

  for (const key of keysToRelease) {
    await key.save();
    console.log(`Key ${key.key} was automatically unblocked after 60 seconds.`);
  }
};

setInterval(releaseBlockedKeys, 600000); 

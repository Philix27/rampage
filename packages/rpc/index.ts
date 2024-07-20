import { AirtimeBeneficiaryRpc, AirtimeBeneficiarySchema } from "./airtimeBeneficiary";
import { GiftCardRpc, GiftCardSchema } from "./giftcard";
import { NewsletterRpc, NewsletterSchema } from "./newsletter";
import { UtilityRpc, UtilitySchema } from "./utility";
import { WaitListRpc, WaitListSchema } from "./waitlist";


export const AppRpc = {
  airtimeBeneficiary: new AirtimeBeneficiaryRpc(),
  newsletter: new NewsletterRpc(),
  giftCard: new GiftCardRpc(),
  waitList: new WaitListRpc(),
  utility: new UtilityRpc(),
};

export const ApiSchema = {
  airtimeBeneficiary: AirtimeBeneficiarySchema,
  newsletter: NewsletterSchema,
  giftCard: GiftCardSchema,
  waitList: WaitListSchema,
  utility: UtilitySchema,
};

export * from "./airtimeBeneficiary";
export * from "./giftcard";
export * from "./newsletter";
export * from "./utility";
export * from "./waitlist";

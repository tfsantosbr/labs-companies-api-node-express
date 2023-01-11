import { Partner } from './../../../domain/features/partners/Partner';
import { EntitySchema } from "typeorm";

export const PartnerSchema = new EntitySchema<Partner>({
  name: "Partners",
  columns: {
    id: {
      type: String,
      primary: true
    },
    completeName: {
      // como mapear o campo firstName?
      // como mapear o campo lastName?
    },
    email: {
      // como mapear o campo address?
    }
  }
})
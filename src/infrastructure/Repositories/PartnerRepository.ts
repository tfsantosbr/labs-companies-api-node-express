import { PartnerItem } from "../../domain/features/partners/models/PartnerItem";
import { Partner } from "../../domain/features/partners/Partner";
import { IPartnerRepository } from "../../domain/features/partners/repositories/IPartnerRepository";

const partners: Partner[] = []

export class PartnerRepository implements IPartnerRepository {
  add(partner: Partner): void {
    partners.push(partner);
  }

  list(): PartnerItem[] {
    return partners.map((p) => <PartnerItem>{
      id: p.id,
      name: p.completeName.toString(),
      email: p.email.address,
    })
  }

  anyPartnerById(partnerId: string): boolean {
    throw new Error("Method not implemented.");
  }

  getById(partnerId: string): Partner | undefined {
    return partners.find((p) => p.id == partnerId);
  }

  remove(partner: Partner): void {
    const index = partners.indexOf(partner, 0);
    if (index > -1) {
      partners.splice(index, 1);
    }
  }

  isDuplicatedEmail(email: string): boolean {
    throw new Error("Method not implemented.");
  }
}
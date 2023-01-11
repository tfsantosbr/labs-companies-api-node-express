import { PartnerItem } from './../models/PartnerItem';
import { Partner } from "../Partner";

export interface IPartnerRepository {
  add(partner: Partner): void;
  list(): PartnerItem[];
  anyPartnerById(partnerId: string): boolean;
  getById(partnerId: string): Partner | undefined;
  remove(partner: Partner): void;
  isDuplicatedEmail(email: string): boolean;
}
import { BeneficiaryRepository } from "../../db";

export class BeneficiaryService {
  constructor(private readonly repo: BeneficiaryRepository) {}

  async create(props: { phone: string; user_id: number }) {
    const res = await this.repo.create({
      phone: props.phone,
      user_id: props.user_id,
    });
    return res;
  }

  async get(props: { id: number }) {
    const res = await this.repo.getById({ id: props.id });
    return res;
  }
  async getAll(props: { user_id: number }) {
    const res = await this.repo.getAll({ user_id: props.user_id });
    return res;
  }

  async delete(props: { id: number }) {
    const res = await this.repo.delete({ id: props.id });
    return res;
  }
}

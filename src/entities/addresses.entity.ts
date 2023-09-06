import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.entity";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  street: string;

  @Column({ type: "varchar", length: 8 })
  zipCode: string;

  @Column({ type: "varchar", length: 7, nullable: true })
  number: string | null | undefined;

  @Column({ type: "varchar", length: 20 })
  city: string;

  @Column({ type: "varchar", length: 2 })
  state: string;

  @OneToMany(() => RealEstate, (re) => re.id)
  realEstate: RealEstate[];
}

export { Address };

import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ nullable: true, type: "date" })
  deletedAt: string | null;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };

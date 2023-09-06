import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import { RealEstate } from "./realEstate.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: number | string;

  @ManyToOne(() => RealEstate, (re) => re.schedules)
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedules)
  @JoinColumn()
  user: User;
}

export { Schedule };

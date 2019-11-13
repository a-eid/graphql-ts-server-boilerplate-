import { Entity, Column, PrimaryColumn, BeforeInsert, BaseEntity } from "typeorm"
import * as v4 from "uuid/v4"

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ length: 255, type: "varchar" })
  email: string

  @Column({ type: "text" })
  password: string

  @BeforeInsert()
  beforeInsert() {
    this.id = v4()
  }
}

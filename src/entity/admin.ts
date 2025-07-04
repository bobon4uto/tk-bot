import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class command {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({type: "varchar"})
	name: string;

	@Column({type: "varchar"})
	alias: string;

	@Column({type: "varchar"})
	doc: string;

	@Column({type: "varchar", nullable: true})
	area: string;

	@Column({type: "int"})
	access: number;

	constructor(
		name: string,
		alias: string,
		doc: string,
		area: string,
		access: number,
	) {
		this.name = name;
		this.alias = alias;
		this.doc = doc;
		this.area = area;
		this.access = access;
	}
}

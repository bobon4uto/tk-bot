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

	@Column({type: "int", nullable: true})
	parent_id: number;

	@Column({type: "int"})
	access: number;

	constructor(
		name: string,
		alias: string,
		doc: string,
		area: string,
		parent_id: number,
		access: number,
	) {
		this.name = name;
		this.alias = alias;
		this.doc = doc;
		this.area = area;
		this.parent_id = parent_id;
		this.access = access;
	}
}

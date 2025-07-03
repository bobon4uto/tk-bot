import {DataSource} from "typeorm";

export let TKB: DataSource;

async function TKinit(db_user: string, db_pass: string, db_name: string) {
	TKB = new DataSource({
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: db_user,
		password: db_pass,
		database: db_name,
		synchronize: true,
		logging: true,
		entities: [],
		subscribers: [],
		migrations: [],
	});
	TKB.initialize();
}
async function TKquery(sql_command: string) {
	TKB.query(sql_command);
}
export {TKinit, TKquery};

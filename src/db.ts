import {DataSource} from "typeorm";

export let TKB: DataSource;
import {command} from "./entity/admin";

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
		entities: [command],
		subscribers: [],
		migrations: [],
	});
	TKB.initialize();
}
async function TKquery(sql_command: string) {
	return JSON.stringify(await TKB.query(sql_command));
}

async function TKaddcommand(TK_command: command) {
	const ComRep = TKB.getRepository(command);

	return JSON.stringify(await ComRep.insert(TK_command));
}
async function TKgetallcommands() {
	const ComRep = TKB.getRepository(command);

	return await ComRep.find();
}

export {TKinit, TKquery, TKaddcommand, TKgetallcommands};

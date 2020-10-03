import { readStringFromFileSync } from '@dclib'

import { IDBOptions, IDBOptionsAuth } from '../options/model';
import { IDBConfig, IDBConfigAuth } from './model';

export function generateDBConfig(options: IDBOptions): IDBConfig {
	const name = options.name || 'lang';

	const host = options.host || '0.0.0.0';
	const port = options.port || 27017;

	const auth = {
		enabled: options.auth.enabled || false,
		username: getUsername(options.auth),
		password: getPassword(options.auth)
	};

	const db = options.db || 'lang';
	const rs = options.rs || undefined;

	const address = getAddress(host, port);
	const connectionUrl = getConnectionUrl(address, db, auth);
  const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

	const debug = options.debug || false;
	const mode = options.mode || undefined;

	const config = {
		name, host, port, auth, db, rs,
		address, connectionUrl, connectionOptions,
		debug, mode
	};

	return config;
}

function getUsername(auth: IDBOptionsAuth): string {
	return auth.enabled ? readStringFromFileSync(auth.usernameFilePath) || auth.username : undefined;
}

function getPassword(auth: IDBOptionsAuth): string {
	return auth.enabled ? readStringFromFileSync(auth.passwordFilePath) || auth.password : undefined;
}

function getAddress(host: string, port: number): string {
	return `${host}:${port}`;
}

function getConnectionUrl(address: string, db: string, auth: IDBConfigAuth) {
	let url = 'mongodb://';

	if (auth.enabled === true) {
		url += `${auth.username}:${auth.password}@`;
	}

	url += `${address}/${db}`;

	return url;
}

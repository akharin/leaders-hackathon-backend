import {IoAdapter} from '@nestjs/platform-socket.io';
import redisIoAdapter from 'socket.io-redis';
import {ServerOptions} from 'socket.io';

export class RedisIoAdapter extends IoAdapter {
	createIOServer(port: number, options?: ServerOptions): any {
		const server = super.createIOServer(port, options);
		const redisAdapter = redisIoAdapter({host: 'localhost', port: 6379});
		server.adapter(redisAdapter);
		return server;
	}
}

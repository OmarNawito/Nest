import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets'


@WebSocketGateway(5050, { namespace: 'chat' })
export class ChatGetWay {

    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handelEvent(@MessageBody() message: string): void {
        this.server.emit('message', message);
    }
}
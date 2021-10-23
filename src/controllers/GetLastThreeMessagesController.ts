import { Request, Response } from "express"
import CreateMessageService from "../services/CreateMessageService";
import GetLastThreeMessagesService from "../services/GetLastThreeMessagesService";


class GetLastThreeMessagesController {
    async handle(request: Request, response: Response) {
        const service = new GetLastThreeMessagesService();
        try{
            const result = await service.execute()
            return response.json(result)
        }catch(error){
            return response.json(error.message);
        }
        
    }
    
}

export default GetLastThreeMessagesController;
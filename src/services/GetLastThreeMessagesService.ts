import prismaClient from '../prisma'


class GetLastThreeMessagesService {
   async execute(){
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true,
            }
        })

        return messages;
   }
 }

export default GetLastThreeMessagesService
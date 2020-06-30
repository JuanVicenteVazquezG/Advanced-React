const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
        
        try {
            const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
            console.log(item);
            return item;
        }
        catch (error) {
            console.log('this is the error: ', error);
        }
    }
};

module.exports =  Mutations ;


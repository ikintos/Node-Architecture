class Action {
    constructor(model) {
        this.model = model;
    }

    async list(q, population) {
        try {
            let params = {};
            let populate_params = [];

            if (q) {
                params = q;
            }

            if (population) {
                populate_params = population;
            }

            let data = await this.model
                .find(params)
                .populate(populate_params)
                .lean()
                .exec();

            return data;
        } catch (err) {
            throw err;
        }
    }
    

    async create(input) {
        try {
            let data = new this.model(input);
            await data.save();

            return data;
        } catch (err) {
            throw err;
        }
    }

    async detail(q, population) {
        try {
            let populate_params = [];
            if (population) {
                populate_params = population;
            }
            let data = await this.model
                .findOne({ _id: q, deleted_at: null })
                .populate(populate_params)
                .lean()
                .exec();

            return data;
        } catch (err) {
            throw err;
        }
    }

    async detail1(q, population) {
        try {
            let populate_params = [];
            if (population) {
                populate_params = population;
            }
            let data = await this.model
                .findOne(q)
                .populate(populate_params)
                .lean()
                .exec();

            return data;
        } catch (err) {
            throw err;
        }
    }

    async delete(q) {
        try {
            let data = await this.model
                .findOneAndUpdate(
                    q,
                    {
                        deleted_at: Date.now()
                    },
                    {
                        new: true
                    }
                )
                .exec();

            return data;
        } catch (err) {
            throw err;
        }
    }
    async edit(q, input, opts) {
        try {
            let data = await this.model.findOneAndUpdate(q, input, opts).exec();

            return data;
        } catch (err) {
            throw err;
        }
    }
    async paginate(q, population, opts) {
        try {
            let params = {},
             populate = [],
             options = {};
                

            if (q) {
                params = q;
            }

            if (population) {
                populate = population;
            }

            if (opts) {
                options = {
                    populate,
                    ...opts
                };
            }

            let data = await this.model
            .paginate(
                { deleted_at: null },
                params,
                options
            )       
           
            let meta = {
                total: data.total,
                limit: data.limit,
                page: data.page,
                pages: data.pages
            };
            data = data.docs;

            return { data, meta };
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Action
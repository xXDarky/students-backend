import models from '../models';


export default {

    add: async(req, res, next) => {
        try {

            const reg = await models.Student.create(req.body);
            res.status(200).json(reg);
            
            
        } catch (e) {
            res.status(500).send({
                message: 'Internal Server Error' 
            });
            next(e);
        }
    },

    query: async(req, res, next) => {
        try {
            const reg = await models.Student.findOne({ _id: req.query._id });
            if (!reg) {
                res.status(404).send({
                    message: 'Not found'
                })
            } else {
                res.status(200).json(reg);
            }
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error'
            });
            next(e);
        }
    },

    list: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Student.find({ $or: [{ 'first_name': new RegExp(valor, 'i') }, { 'last_name': new RegExp(valor, 'i') }] }, { createdAt: 0 }).sort({ 'createdAt': -1 });

            if (!reg) {
                res.status(404).send({
                    message: 'Not found'
                })
            } else {
                res.status(200).json(reg);
            }
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error'
            });
            next(e);
        }
    },
    update: async(req, res, next) => {
        if(req.body._id){
            try {
                const reg = await models.Student.findByIdAndUpdate({ _id: req.body._id }, { first_name:req.body.first_name, 
                                                                                            last_name:req.body.last_name, 
                                                                                            email:req.body.email, 
                                                                                            gender: req.body.gender,
                                                                                            birth_date: req.body.birth_date,
                                                                                            address: req.body.address
                                                                                        });
                console.log(reg);
                if(!reg){
                 res.status(404).send({
                     message: 'Not found'
                 })
                }else
                res.status(200).json(reg);
            } catch (error) {
                res.status(500).send({
                    message: 'Internal Server Error'
                });
                next(e);
            }

        }else{
            res.status(400).send({
                message: 'Bad Request'
            })
        }
        
    },
    remove: async(req, res, next) => {
        if(req.params._id ){

            try {
                const reg = await models.Student.findByIdAndDelete({_id:req.params._id});
                if(!reg){
                    res.status(404).send({
                        message: 'not found'
                    })
                  }else
                res.status(200).json(reg);
            } catch (error) {
                res.status(500).send({
                    message:'Internal Server Error'
                });   
                next(e); 
            }
        }else{
            res.status(400).send({
                message: 'Bad Request'
            })
        }
    },
    activate: async(req, res, next) => {
        if(req.body._id ){

            try {
                const reg = await models.Student.findByIdAndUpdate({_id:req.body._id}, {status:1});
                if(!reg){
                    res.status(404).send({
                        message: 'not found'
                    })
                  }else
                res.status(200).json(reg);
            } catch (error) {
                res.status(500).send({
                    message:'Internal Server Error'
                });   
                next(e);
            }
        }else{
            res.status(400).send({
                message: 'Bad Request'
            })
        }
    },
    deactivate: async(req, res, next) => {
        if(req.body._id ){

            try {
                const reg = await models.Student.findByIdAndUpdate({_id:req.body._id}, {status:0});
                if(!reg){
                    res.status(404).send({
                        message: 'not found'
                    })
                  }else
                res.status(200).json(reg);
            } catch (error) {
                res.status(500).send({
                    message:'Internal Server Error'
                });   
                next(e);
            }
        }else{
            res.status(400).send({
                message: 'Bad Request'
            })
        }
    }

}
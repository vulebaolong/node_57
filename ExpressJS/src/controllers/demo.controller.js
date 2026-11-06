import demoService from "../services/demo.service.js";

const demoControler = {
    list: (req, res, next) => {
        const result = demoService.list()
        res.json({
            data: result,
        });
    },
};

export default demoControler;

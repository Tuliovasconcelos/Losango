import { celebrate, Segments, Joi } from 'celebrate';

export const storeAlunoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            cpf: Joi.string().required().length(11),
            data_nasc: Joi.date().required(),
            nome_mae: Joi.string().required(),
            cpf_mae: Joi.string().required().length(11),
            nome_pai: Joi.string().required(),
            cpf_pai: Joi.string().required().length(11),
            id_turma: Joi.number().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
import { celebrate, Segments, Joi } from 'celebrate';

export const storeMedicamentoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            quantidade: Joi.number().required(),
            periodo: Joi.string().required(),
            horarios: Joi.string().required(),
            foto_receita: Joi.string().required(),
            id_aluno: Joi.number().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
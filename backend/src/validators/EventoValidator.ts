import { celebrate, Segments, Joi } from 'celebrate';

export const storeEventoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            data_evento: Joi.date().required(),
            id_calendario: Joi.number().required()
        }),
    },
    {
        abortEarly: false,
    },
);
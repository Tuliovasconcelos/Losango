import { celebrate, Segments, Joi } from 'celebrate';

export const storeNotificacaoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            id_usuario: Joi.number().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
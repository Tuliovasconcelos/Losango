import { celebrate, Segments, Joi } from 'celebrate';

export const storeNoticiaValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            imagem: Joi.string().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
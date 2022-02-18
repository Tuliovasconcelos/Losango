import { celebrate, Segments, Joi } from 'celebrate';

export const storeFotoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            imagem: Joi.string().required(),
            id_galeria: Joi.string().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
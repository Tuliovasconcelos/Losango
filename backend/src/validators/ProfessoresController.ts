import { celebrate, Segments, Joi } from 'celebrate';

export const storeProfessoresValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            cpf: Joi.string().required().length(11),
            email: Joi.string().required().email()
        }),
    },
    {
        abortEarly: false,
    },
);
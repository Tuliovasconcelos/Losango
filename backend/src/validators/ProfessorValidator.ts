import { celebrate, Segments, Joi } from 'celebrate';

export const storeProfessorValidator = celebrate(
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
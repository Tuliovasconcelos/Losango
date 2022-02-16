import { celebrate, Segments, Joi } from 'celebrate';

export const storeUsuarioValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            cpf: Joi.string().required().length(11),
            email: Joi.string().required().email(),
            telefone: Joi.string().required().length(12),
            usuario: Joi.string().required(),
            senha: Joi.string().required(),
            cpf_filho: Joi.string().required(),
        }),
    },
    {
        abortEarly: false,
    },
);
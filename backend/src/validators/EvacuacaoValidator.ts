import { celebrate, Segments, Joi } from 'celebrate';

export const storeEvacuacaoValidator = celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required()
        }),
    },
    {
        abortEarly: false,
    },
);
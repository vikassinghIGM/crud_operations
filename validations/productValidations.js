import Joi from 'joi';

export const productValidationSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'required a name'
    }),
    quantity: Joi.number().required().default(0),
    image: Joi.string().optional().default('')
});

export const validateProduct = (product) => {
    return productValidationSchema.validate(product);
};

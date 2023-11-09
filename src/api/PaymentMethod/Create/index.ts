import { onRequest } from '../../Request';
import { URL } from '../../../url';
import { onPaymentMethodCreateFunction } from './interface';
import { onPaymentMethodCreateValidatorProps } from './validator';
import { onPaymentMethodCreateParseProps } from './parse';

export const onPaymentMethodCreate: onPaymentMethodCreateFunction = async (data) => {
    const validate = onPaymentMethodCreateValidatorProps(data);
    if (validate !== true) {
        return validate;
    }
    const result = await onRequest({
        url: URL + `/profiles`,
        method: 'post',
        headers: {
            Authorization: `Passcode ${data.token}`,
        },
        data: {
            ...onPaymentMethodCreateParseProps(data),
        },
    });
    return result;
};

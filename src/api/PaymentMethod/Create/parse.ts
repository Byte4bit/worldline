import { onPaymentMethodCreateFunctionParseProps } from './interface';

export const onPaymentMethodCreateParseProps: onPaymentMethodCreateFunctionParseProps = (
    data,
) => {
    return {
        ...data,
    };
};

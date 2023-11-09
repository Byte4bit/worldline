"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentMethodCreateParseProps = void 0;
const onPaymentMethodCreateParseProps = ({ token, ...data }) => {
    token;
    const card = data.card;
    if (card) {
        card.expiry_month = card.expiry_month.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 0,
        });
        card.expiry_year = card.expiry_year.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 0,
        });
    }
    return {
        ...data,
        card,
    };
};
exports.onPaymentMethodCreateParseProps = onPaymentMethodCreateParseProps;
//# sourceMappingURL=parse.js.map
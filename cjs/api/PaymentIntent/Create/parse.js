"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentIntentCreateParseProps = void 0;
const onPaymentIntentCreateParseProps = ({ token, ...data }) => {
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
exports.onPaymentIntentCreateParseProps = onPaymentIntentCreateParseProps;
//# sourceMappingURL=parse.js.map
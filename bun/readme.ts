import { root } from '../index';

const PAYMENT_METHOD_CREATE = root + '/src/api/PaymentMethod/Create/readme.md';


const READMEBASE = root + '/src/readme.md';

const README = root + '/README.md';

const CopyStyles = async () => {
    // const Bun = {}
    const Bun_ = Bun as any; // eslint-disable-line
    const READMEBASE_FILE = Bun_.file(READMEBASE);

    const getReadme = async (fileUrl: string, summary: string) => {
        const file = Bun_.file(fileUrl);
        const text = await file.text();
        const readme = `<details><summary>${summary}</summary>\n${text}</details>`;
        return readme;
    };
    const LIST = await Promise.all([
        READMEBASE_FILE.text(),
        getReadme(PAYMENT_METHOD_CREATE, 'onPaymentMethodCreate'),
    ]);

    const output = Bun_.file(README); // doesn't exist yet!
    await Bun_.write(
        output,
        LIST.join("\n"),
    );
};
CopyStyles();
